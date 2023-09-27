import {Page,Locator} from '@playwright/test';

const dynamicValue = Date.now().toString();

export class monitorSetup {

    readonly page: Page;
    readonly AddNewMonitorBtn: Locator;
    readonly NameInputToAddNewMonitorOrEditMonitor: Locator;
    readonly SaveNewMonitorBtnOrSaveUpdate: Locator;
    readonly MonitorSearchField: Locator;
    readonly UpdateMonitor: Locator;
    readonly DeleteMonitor: Locator;
    readonly DeleteBtnInPopup: Locator;
    readonly AssertOffAdd: Locator;
    readonly AssertOffEdit: Locator;
    readonly AssertOffDelete: Locator;


constructor(page: Page) {
    this.page = page;
    this.AddNewMonitorBtn = page.locator("#AddNewMonitorBtn");
    this.NameInputToAddNewMonitorOrEditMonitor = page.locator("#NameInput");
    this.SaveNewMonitorBtnOrSaveUpdate = page.locator('.k-grid-update');
    this.MonitorSearchField = page.locator('[title="Monitor Name"]');
    this.UpdateMonitor = page.locator('.k-grid-edit');
    this.DeleteMonitor = page.locator('.k-grid-deleterow');
    this.DeleteBtnInPopup = page.locator('#modal-scopeddelete-monitor___BV_modal_footer_').getByRole('button', { name: 'Delete' }); 
    this.AssertOffAdd = page.getByRole('gridcell', { name: 'monitor'+dynamicValue });
    this.AssertOffEdit = page.getByRole('gridcell', { name: 'monitor'+dynamicValue+'Edited' });
    this.AssertOffDelete = page.locator('#monitorListGrid .nodata-img');
    }



//methods

async navigateToMonitorSetupPage (URL:string)
{
    //URL= 'http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup'
    await this.page.goto(URL)
}

async performAddMonitor() {
    //Add new monitor
    await this.AddNewMonitorBtn.click();
    await this.NameInputToAddNewMonitorOrEditMonitor.click();
    await this.NameInputToAddNewMonitorOrEditMonitor.fill('monitor'+dynamicValue);
    //click save
    await this.SaveNewMonitorBtnOrSaveUpdate.click();
    //filter for specific item ('monitor' +dynamicValue)
    await this.MonitorSearchField.click();
    await this.MonitorSearchField.fill('monitor'+dynamicValue);
    await this.MonitorSearchField.press('Enter');
}    


async performEditMonitor () {
     //filter for specific item ('monitor'+dynamicValue)
     await this.MonitorSearchField.click();
     await this.MonitorSearchField.fill('monitor'+dynamicValue);
     await this.MonitorSearchField.press('Enter');
     //clicking edit button
     await this.UpdateMonitor.click();
     //clicking inside field
     await this.NameInputToAddNewMonitorOrEditMonitor.click();
     //editing from ('monitor'+dynamicValue) to ('monitor'+dynamicValue+'Edited')
     await this.NameInputToAddNewMonitorOrEditMonitor.click({ clickCount: 3});
     await this.NameInputToAddNewMonitorOrEditMonitor.fill('monitor'+dynamicValue+'Edited');
     //click Save button
     await this.SaveNewMonitorBtnOrSaveUpdate.click();
     //filter for specific item ('monitor'+dynamicValue+'Edited')
     await this.MonitorSearchField.click();
     await this.MonitorSearchField.fill('monitor'+dynamicValue+'Edited');
     await this.MonitorSearchField.press('Enter');
}


async performDeleteMonitor() {
    //filter for specific item ('monitor'+dynamicValue+'Edited')
    await this.MonitorSearchField.click();
    await this.MonitorSearchField.fill('monitor'+dynamicValue+'Edited');
    await this.MonitorSearchField.press('Enter');
    //clicking delete button
    await this.DeleteMonitor.click();
    //clicking delete button in the popup
    //await page.locator('.btn btn-danger').click();   => //does not work :(
    await this.DeleteBtnInPopup.click(); 
    //filter for specific item ('monitor'+dynamicValue+'Edited')
    await this.MonitorSearchField.click();
    await this.MonitorSearchField.fill('monitor'+dynamicValue+'Edited');
    await this.MonitorSearchField.press('Enter')    
}


}