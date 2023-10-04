import {Page,Locator} from '@playwright/test'

export class monitorAssignationPage{

    readonly page: Page;

    //for ADD test case
    readonly AssignRoomsBtn: Locator;
    readonly MonitorNameField_ADD: Locator;
    readonly FirstItemOfMonitorNameList_ADD: Locator;
    readonly BuildingField_ADD: Locator;
    readonly FirstItemOfBuildingList_ADD: Locator;
    readonly FloorField_ADD: Locator;
    readonly FirstItemOfFloorList_ADD: Locator;
    readonly RoomField_ADD: Locator;
    readonly FirstItemOfRoomList_ADD: Locator;
    readonly SaveBtn_ADD: Locator;
    readonly AssertSuccessToaster: Locator;

    //for Edit test case
    readonly EditBtn: Locator;
    readonly FloorField_Edit: Locator;
    readonly SecondItemOfFloorList_Edit: Locator;
    readonly RoomField_Edit: Locator;
    readonly SecondItemOfRoomList_Edit: Locator;
    readonly SaveBtn_Edit: Locator;
    readonly AssertUpdateToaster: Locator;

    //for Delete test case
    readonly DeleteBtnOfFirstRecord: Locator;
    readonly DeleteBtnOfPopup: Locator;
    readonly AssertDeleteToaster: Locator;

constructor (page: Page)
{
    this.page = page;
    this.AssignRoomsBtn= page.locator('#AddNewMonitorBtn');
    this.MonitorNameField_ADD= page.locator("[data-container-for='Name'] .k-dropdown-wrap");
    this.FirstItemOfMonitorNameList_ADD= page.locator('#Name_listbox li').nth(0);
    this.BuildingField_ADD= page.locator("[data-container-for='BuildingName'] .k-dropdown-wrap");
    this.FirstItemOfBuildingList_ADD= page.locator('#BuildingName_listbox li').nth(0);
    this.FloorField_ADD= page.locator("[data-container-for='FloorName'] .k-dropdown-wrap");
    this.FirstItemOfFloorList_ADD= page.locator('#FloorName_listbox li').nth(0);
    this.RoomField_ADD= page.locator("[data-container-for='RoomListNames'] .k-widget");
    this.FirstItemOfRoomList_ADD= page.locator('#RoomListNames_listbox li').nth(0);
    this.SaveBtn_ADD= page.getByRole('button', { name: ' Save' });
    this.AssignRoomsBtn= page.getByText('Saved Successfully');

    this.EditBtn= page.locator('.k-grid-edit');
    this.FloorField_Edit= page.locator("[data-container-for='FloorName'] .k-dropdown-wrap");
    this.SecondItemOfFloorList_Edit= page.locator('#FloorName_listbox li').nth(1);
    this.RoomField_Edit= page.locator("[data-container-for='RoomListNames'] Div .k-widget");
    this.SecondItemOfRoomList_Edit= page.locator('#RoomListNames_listbox li').nth(1);
    this.SaveBtn_Edit= page.getByRole('button', { name: ' Save' });
    this.AssertUpdateToaster= page.getByText('Updated Successfully');

    this.DeleteBtnOfFirstRecord= page.getByRole('button', { name: 'Delete' }).nth(0);
    this.DeleteBtnOfPopup= page.locator('#modal-scopeddelete-assigned-monitor___BV_modal_footer_').getByRole('button', { name: 'Delete' });
    this.AssertDeleteToaster= page.getByText('Deleted Successfully')

}

//methods

async navigatingTo_MonitorAssignationPage (URL:string)
{
    await this.page.goto(URL);
}


async perform_Add_MonitorAssignation_Record()
{
    //click Assign rooms btn
    await this.AssignRoomsBtn.click();
    //click dropdown arrow of (Monitor Name) field
    await this.MonitorNameField_ADD.click();
    //select first item of Monitor Name list
    await this.FirstItemOfMonitorNameList_ADD.click();
    //click dropdown arrow of (Building) field
    await this.BuildingField_ADD.click();
    //select first item of Building list
    await this.FirstItemOfBuildingList_ADD.click();
    //click dropdown arrow of (Floor) field
    await this.FloorField_ADD.click();
    //select first item of Floor list
    await this.FirstItemOfFloorList_ADD.click();
    //click dropdown arrow of (Rooms) field
    await this.RoomField_ADD.click();
    //select first item of Rooms list
    await this.FirstItemOfRoomList_ADD.click();
    //click save button
    await this.SaveBtn_ADD.click();
}

async perform_Edit_MonitorAssignation_Record()
{
    //Edit first existing record
    //click Edit btn
    await this.EditBtn.click();
    //click dropdown arrow of (Floor) field
    await this.FloorField_Edit.click() ;
    //select second item of Floor list
    await this.SecondItemOfFloorList_Edit.click();
    //click dropdown arrow of (Rooms) field
    await this.RoomField_Edit.click();
    //select second item of Rooms list
    await this.SecondItemOfRoomList_Edit.click(); 
    //click save button
    await this.SaveBtn_Edit.click();
}

async perform_Delete_MonitorAssignation_Record()
{ 
    //Delete first existing record
    //click Delete for first existing record
    await this.DeleteBtnOfFirstRecord.click();
    //click Delete in the popup
    await this.DeleteBtnOfPopup.click();
}

}