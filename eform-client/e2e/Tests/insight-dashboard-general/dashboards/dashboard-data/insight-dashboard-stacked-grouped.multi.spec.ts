import { expect } from 'chai';
import loginPage from '../../../../Page objects/Login.page';
import insightDashboardPage from '../../../../Page objects/InsightDashboard/InsightDashboard.page';
import dashboardsPage from '../../../../Page objects/InsightDashboard/InsightDashboard-Dashboards.page';
import dashboardsViewPage from '../../../../Page objects/InsightDashboard/InsightDashboard-DashboardView.page';
import dashboardEditPage, {
  DashboardTestConfigEditModel,
} from '../../../../Page objects/InsightDashboard/InsightDashboard-DashboardEdit.page';
import sitesPage from '../../../../Page objects/Sites.page';
import {
  dashboardStackedGroupedDataJson,
  dashboardStackedGroupedItems,
} from '../../../../Page objects/InsightDashboard/ChartData/DashboardStackedGrouped.data';
import myEformsPage from '../../../../Page objects/MyEforms.page';

const dashboardConfig: DashboardTestConfigEditModel = {
  locationTagName: 'Total',
  dateFrom: '2016/01/01',
  dateTo: '2020/05/14',
  today: true,
};

describe('InSight Dashboard - Dashboards - Stacked Grouped', function () {
  before(function () {
    loginPage.open('/auth');
    loginPage.login();

    // Create and assign total tag
    myEformsPage.Navbar.goToSites();
    const site = sitesPage.getFirstRowObject();
    if (!site.tags || !site.tags.includes(dashboardConfig.locationTagName)) {
      sitesPage.createTag([dashboardConfig.locationTagName]);
      for (let i = 1; i < 5; i++) {
        sitesPage.getSite(i).edit({ tags: [dashboardConfig.locationTagName] });
      }
    }

    // Create dashboard with items
    insightDashboardPage.goToDashboards();
    dashboardsPage.createDashboard('Stacked Grouped');
    dashboardEditPage.setDashboardSettings(dashboardConfig);
    dashboardEditPage.generateItems(dashboardStackedGroupedItems);
    dashboardEditPage.dashboardUpdateSaveBtn.click();
  });
  it('should compare items headers', function () {
    $('#spinner-animation').waitForDisplayed({ timeout: 30000, reverse: true });
    dashboardsViewPage.compareHeaders(dashboardStackedGroupedDataJson);
  });
  it('should compare items percentage', function () {
    dashboardsViewPage.comparePercentage(dashboardStackedGroupedDataJson);
  });
  it('should compare items amounts', function () {
    dashboardsViewPage.compareAmounts(dashboardStackedGroupedDataJson);
  });
});
