import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonDictionaryModel} from '../../../../../../common/models/common';
import {InsightDashboardPnSurveyConfigsService} from '../../../services';
import {SurveyConfigModel} from '../../../models/survey/survey-config.model';

@Component({
  selector: 'app-survey-configuration-edit',
  templateUrl: './survey-configuration-edit.component.html',
  styleUrls: ['./survey-configuration-edit.component.scss']
})
export class SurveyConfigurationEditComponent implements OnInit {
  @ViewChild('frame') frame;
  @Input() locations: CommonDictionaryModel[] = [];
  @Input() surveys: CommonDictionaryModel[] = [];
  @Output() configUpdated: EventEmitter<void> = new EventEmitter<void>();
  spinnerStatus = false;
  selectedSurveyId: number;
  selectedLocations: number[];
  typeahead = new EventEmitter<string>();


  constructor(
    private surveyConfigsService: InsightDashboardPnSurveyConfigsService,
    private cd: ChangeDetectorRef
  ) {}

  show(surveyConfig: SurveyConfigModel) {
    // TODO: Add logic to checkboxes
    this.frame.show();
  }

  ngOnInit() {
  }

  updateConfig() {
    this.spinnerStatus = true;
    this.surveyConfigsService.update({locationsIds: this.selectedLocations, surveyId: this.selectedSurveyId})
      .subscribe((data) => {
        if (data && data.success) {
          this.frame.hide();
          this.configUpdated.emit();
        }
        this.spinnerStatus = false;
      });
  }
}
