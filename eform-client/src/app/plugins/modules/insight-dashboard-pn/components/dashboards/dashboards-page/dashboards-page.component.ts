import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PageSettingsModel} from '../../../../../../common/models/settings';
import {SharedPnService} from '../../../../shared/services';
import {DashboardModel, DashboardsListModel} from '../../../models';
import {DashboardsRequestModel} from '../../../models/dashboard/dashboards-request.model';
import {Subject, Subscription} from 'rxjs';
import {DashboardSortColumns, insightDashboardPnSettings} from '../../../const';
import {DashboardCopyComponent, DashboardDeleteComponent, DashboardEditComponent, DashboardNewComponent} from '../..';
import {
  InsightDashboardPnDashboardsService,
  InsightDashboardPnLocationsService,
  InsightDashboardPnSurveyConfigsService
} from '../../../services';
import {CommonDictionaryModel} from '../../../../../../common/models/common';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {Router} from '@angular/router';
import {SitesService} from '../../../../../../common/services/advanced';
import {CommonDictionaryExtendedModel} from '../../../models/common-dictionary-extended.model';

@AutoUnsubscribe()
@Component({
  selector: 'app-insight-dashboard-dashboards',
  templateUrl: './dashboards-page.component.html',
  styleUrls: ['./dashboards-page.component.scss']
})
export class DashboardsPageComponent implements OnInit, OnDestroy {
  @ViewChild('newDashboardModal') newDashboardModal: DashboardNewComponent;
  @ViewChild('copyDashboardModal') copyDashboardModal: DashboardCopyComponent;
  @ViewChild('editDashboardModal') editDashboardModal: DashboardEditComponent;
  @ViewChild('deleteDashboardModal') deleteDashboardModal: DashboardDeleteComponent;
  dashboardsListModel: DashboardsListModel = new DashboardsListModel();
  dashboardsRequestModel: DashboardsRequestModel = new DashboardsRequestModel();
  localPageSettings: PageSettingsModel = new PageSettingsModel();
  spinnerStatus = false;
  searchSubject = new Subject();
  availableSurveys: CommonDictionaryModel[] = [];
  availableLocationsTags: CommonDictionaryExtendedModel[] = [];
  getAllSub$: Subscription;
  getSurveysSub$: Subscription;
  getTagsSub$: Subscription;
  getLocationsSub$: Subscription;

  get sortCols() {
    return DashboardSortColumns;
  }

  constructor(private sharedPnService: SharedPnService,
              private dashboardService: InsightDashboardPnDashboardsService,
              private surveyConfigsService: InsightDashboardPnSurveyConfigsService,
              private locationsService: InsightDashboardPnLocationsService,
              private sitesService: SitesService,
              private router: Router) {
  }

  ngOnInit() {
    this.getLocalPageSettings();
    this.getSurveys();
  }

  getDashboardsList() {
    this.spinnerStatus = true;
    this.dashboardsRequestModel.isSortDsc = this.localPageSettings.isSortDsc;
    this.dashboardsRequestModel.sort = this.localPageSettings.sort;
    this.dashboardsRequestModel.pageSize = this.localPageSettings.pageSize;

    this.getAllSub$ = this.dashboardService.getAll(this.dashboardsRequestModel).subscribe((data) => {
      if (data && data.success) {
        this.dashboardsListModel = data.model;
      }
      this.spinnerStatus = false;
    });
  }

  getSurveys() {
    this.spinnerStatus = true;
    this.getSurveysSub$ = this.surveyConfigsService.getAvailableSurveys().subscribe((data) => {
      if (data && data.success) {
        this.availableSurveys = data.model;
      }
      this.spinnerStatus = false;
    });
  }


  sortTable(sort: string) {
    if (this.localPageSettings.sort === sort) {
      this.localPageSettings.isSortDsc = !this.localPageSettings.isSortDsc;
    } else {
      this.localPageSettings.isSortDsc = false;
      this.localPageSettings.sort = sort;
    }
    this.updateLocalPageSettings();
  }

  changePage(e: any) {
    if (e || e === 0) {
      this.dashboardsRequestModel.offset = e;
      this.getDashboardsList();
    }
  }

  onSearchInputChanged(e: any) {
    this.searchSubject.next(e.target.value);
  }

  getSortIcon(sort: string): string {
    if (this.dashboardsRequestModel.sort === sort) {
      return this.dashboardsRequestModel.isSortDsc ? 'expand_more' : 'expand_less';
    } else {
      return 'unfold_more';
    }
  }

  getLocalPageSettings() {
    this.localPageSettings = this.sharedPnService
      .getLocalPageSettings(insightDashboardPnSettings, 'Dashboards')
      .settings;
    this.getDashboardsList();
  }

  updateLocalPageSettings() {
    this.sharedPnService.updateLocalPageSettings(
      insightDashboardPnSettings,
      this.localPageSettings,
      'Dashboards'
    );
    this.getDashboardsList();
  }


  openCreateModal() {
    this.newDashboardModal.show();
  }

  openEditPage(dashboard: DashboardModel) {
    this.router.navigate(['/plugins/insight-dashboard-pn/dashboard/edit/', dashboard.id]).then();
  }

  openViewPage(dashboard: DashboardModel) {
    this.router.navigate(['/plugins/insight-dashboard-pn/dashboard/', dashboard.id]).then();
  }

  openCopyModal(model: DashboardModel) {
    this.copyDashboardModal.show(model);
  }

  openDeleteModal(model: DashboardModel) {
    this.deleteDashboardModal.show(model);
  }

  getLocationTags(surveyId: number) {
    this.getLocationsSub$ = this.sitesService.getAllSitesDictionary().subscribe((data) => {
      if (data && data.success) {
        this.availableLocationsTags = [...this.availableLocationsTags, ...data.model.map(x => {
          return {id: x.id, name: x.name, isTag: true, description: x.description};
        })];
      }
    });
    this.getTagsSub$ = this.locationsService.getBySurveyId(surveyId).subscribe((data) => {
      if (data && data.success) {
        this.availableLocationsTags = [...this.availableLocationsTags, ...data.model.map(x => {
          return {id: x.id, name: x.name, isTag: true, description: x.description};
        })];
      }
    });
  }

  ngOnDestroy(): void {
  }
}
