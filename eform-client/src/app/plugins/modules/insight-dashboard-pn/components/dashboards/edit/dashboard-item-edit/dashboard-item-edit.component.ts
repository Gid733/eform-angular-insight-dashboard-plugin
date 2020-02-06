import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChildren} from '@angular/core';
import {DashboardChartTypesEnum, DashboardItemFieldsEnum, DashboardPeriodUnitsEnum} from '../../../../const/enums';
import {DashboardItemModel} from '../../../../models';
import {CommonDictionaryModel} from '../../../../../../../common/models/common';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {Subscription} from 'rxjs';
import {InsightDashboardPnDashboardDictionariesService} from '../../../../services';
import {TranslateService} from '@ngx-translate/core';

@AutoUnsubscribe()
@Component({
  selector: 'app-dashboard-item-edit',
  templateUrl: './dashboard-item-edit.component.html',
  styleUrls: ['./dashboard-item-edit.component.scss']
})
export class DashboardItemEditComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChildren('collapse') collapse: any;
  @Input() dashboardItem: DashboardItemModel = new DashboardItemModel();
  @Input() questions: CommonDictionaryModel[] = [];
  @Input() surveyId = 1;
  @Output() addNewItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() copyItem: EventEmitter<DashboardItemModel> = new EventEmitter<DashboardItemModel>();
  @Output() dashboardItemChanged: EventEmitter<DashboardItemModel> = new EventEmitter<DashboardItemModel>();
  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  filterAnswers: CommonDictionaryModel[] = [];
  loadAnswersSub$: Subscription;
  filteredQuestions: CommonDictionaryModel[] = [];
  allCharts = [];
  availableCharts = [];

  compareTemp = ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'];

  get periodUnits() {
    return DashboardPeriodUnitsEnum;
  }

  get itemFields() {
    return DashboardItemFieldsEnum;
  }

  get chartTypes() {
    return DashboardChartTypesEnum;
  }

  constructor(private dictionariesService: InsightDashboardPnDashboardDictionariesService, private translateService: TranslateService) {
  }

  ngOnInit() {

  }

  addNew(position: number) {
    this.addNewItem.emit(position);
  }

  copy(model: DashboardItemModel) {
    this.copyItem.emit(model);
  }

  delete(position: number) {
    this.deleteItem.emit(position);
  }

  loadAnswers() {
    this.loadAnswersSub$ = this.dictionariesService.getFilterAnswers({
      filterQuestionId: this.dashboardItem.filterQuestionId
    })
      .subscribe((data) => {
        if (data && data.success) {
          this.filterAnswers = data.model;
        }
      });
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.dashboardItem) {
      const currentValue = changes.dashboardItem.currentValue as DashboardItemModel;

      // load answers on change fields
      this.dashboardItem[DashboardItemFieldsEnum.firstQuestionId] = currentValue.firstQuestionId;
      this.dashboardItem[DashboardItemFieldsEnum.filterQuestionId] = currentValue.filterQuestionId;
      this.loadAnswers();

      // change available chart types depends on period
      this.fillChartsOptions(currentValue.period);
    }
    if (changes && changes.questions) {
      this.filteredQuestions = [...this.questions];
    }
  }

  fieldChanged(value: any, fieldName: string) {
    if (this.dashboardItem[fieldName] !== value) {
      this.dashboardItem[fieldName] = value;
      this.dashboardItemChanged.emit(this.dashboardItem);

      // remove filters on change
      if (fieldName === DashboardItemFieldsEnum.firstQuestionId) {
        this.dashboardItem[DashboardItemFieldsEnum.filterQuestionId] = null;
        this.dashboardItem[DashboardItemFieldsEnum.filterAnswerId] = null;

        // immutable remove element on position to trigger change detection
        const index = this.questions.findIndex(data => data.id === value);
        this.filteredQuestions = [...this.questions.slice(0, index), ...this.questions.slice(index + 1)];
        this.loadAnswers();
      }

      if (fieldName === DashboardItemFieldsEnum.filterQuestionId) {
        this.dashboardItem[DashboardItemFieldsEnum.filterAnswerId] = null;
        this.loadAnswers();
      }
      // change available chart types depends on period
      if (fieldName === DashboardItemFieldsEnum.period) {
        this.dashboardItem[DashboardItemFieldsEnum.chartType] = null;

        if (value !== DashboardPeriodUnitsEnum.Total) {
          this.availableCharts = [...this.allCharts.slice(0, 0), ...this.allCharts.slice(3)];
        } else {
          this.availableCharts = [...this.allCharts];
        }
      }

      if (fieldName === DashboardItemFieldsEnum.calculateAverage) {

      }
    }
  }

  private fillChartsOptions(period: DashboardPeriodUnitsEnum) {
    setTimeout(() => {
      const charts = [{
        id: DashboardChartTypesEnum.Pie,
        name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.Pie])
      },
        {
          id: DashboardChartTypesEnum.HorizontalBar,
          name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.HorizontalBar])
        },
        {
          id: DashboardChartTypesEnum.VerticalBar,
          name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.VerticalBar])
        },
        {id: DashboardChartTypesEnum.Line, name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.Line])},
        {
          id: DashboardChartTypesEnum.HorizontalBarStacked,
          name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.HorizontalBarStacked])
        },
        {
          id: DashboardChartTypesEnum.HorizontalBarGrouped,
          name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.HorizontalBarGrouped])
        },
        {
          id: DashboardChartTypesEnum.VerticalBarStacked,
          name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.VerticalBarStacked])
        },
        {
          id: DashboardChartTypesEnum.VerticalBarGrouped,
          name: this.translateService.instant(DashboardChartTypesEnum[DashboardChartTypesEnum.VerticalBarGrouped])
        }];
      this.allCharts = [...charts];
      if (period !== DashboardPeriodUnitsEnum.Total) {
        this.availableCharts = [...charts.slice(0, 0), ...charts.slice(3)];
      } else {
        this.availableCharts = [...charts];
      }
    }, 1000);
  }

  addToArray(e: any, answerId: number) {
    if (e.target.checked) {
      this.dashboardItem.ignoredAnswerValues.push(answerId);
    } else {
      this.dashboardItem.ignoredAnswerValues = this.dashboardItem.ignoredAnswerValues.filter(x => x !== answerId);
    }
    this.fieldChanged(this.dashboardItem.ignoredAnswerValues, DashboardItemFieldsEnum.ignoredAnswerValues);
  }

  isAnswerIgnored(id: number) {
    return this.dashboardItem.ignoredAnswerValues && this.dashboardItem.ignoredAnswerValues.findIndex(x => x === id) > -1;
  }
}
