﻿/*
The MIT License (MIT)

Copyright (c) 2007 - 2019 Microting A/S

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

namespace InsightDashboard.Pn.Controllers
{
    using System.Threading.Tasks;
    using Infrastructure.Models.Dashboards;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Microting.eFormApi.BasePn.Infrastructure.Models.API;
    using Services.DashboardService;

    [Authorize]
    public class DashboardsController : Controller
    {
        private readonly IDashboardService _dashboardService;

        public DashboardsController(IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }

        [HttpPost]
        [Route("api/insight-dashboard-pn/dashboards")]
        public async Task<OperationDataResult<DashboardsListModel>> GetAll([FromBody] DashboardsRequestModel requestModel)
        {
            return await _dashboardService.GetAll(requestModel);
        }

        [HttpGet]
        [Route("api/insight-dashboard-pn/dashboards/view/{id}")]
        public async Task<OperationDataResult<DashboardViewModel>> GetSingleForView(int id)
        {
            return await _dashboardService.GetSingleForView(id);
        }

        [HttpGet]
        [Route("api/insight-dashboard-pn/dashboards/edit/{id}")]
        public async Task<OperationDataResult<DashboardEditModel>> GetSingleForEdit(int id)
        {
            return await _dashboardService.GetSingleForEdit(id);
        }

        [HttpPost]
        [Route("api/insight-dashboard-pn/dashboards/create")]
        public async Task<OperationDataResult<int>> Create([FromBody] DashboardCreateModel requestModel)
        {
            return await _dashboardService.Create(requestModel);
        }

        [HttpPost]
        [Route("api/insight-dashboard-pn/dashboards/copy/{id}")]
        public async Task<OperationResult> Copy(int id)
        {
            return await _dashboardService.Copy(id);
        }

        [HttpPost]
        [Route("api/insight-dashboard-pn/dashboards/update")]
        public async Task<OperationResult> Update([FromBody] DashboardEditModel editModel)
        {
            return await _dashboardService.Update(editModel);
        }

        [HttpPost]
        [Route("api/insight-dashboard-pn/dashboards/delete/{id}")]
        public async Task<OperationResult> Remove(int id)
        {
            return await _dashboardService.Remove(id);
        }
    }
}
