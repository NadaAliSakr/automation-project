import {test,expect} from '@playwright/test'
import { monitorAssignationPage } from './MonitorsAssignation.page'


///////////////////////////////////////////ADD///////////////////////////////////////////////////////
test('test add Assignation record', async ({ page }) => {
   
  const monitorAssign= new monitorAssignationPage(page);
  await monitorAssign.navigatingTo_MonitorAssignationPage ('http://backoffice-prelive.andalusiagroup.net:8090/queuing-management/setups/monitors-assignation')
  await monitorAssign.perform_Add_MonitorAssignation_Record();
  //Assertion on toaster message of Adding
  const addRecordAssert= monitorAssign.AssertSuccessToaster
  await expect (addRecordAssert).toBeVisible();
});


 ///////////////////////////////////////EDIT///////////////////////////////////////////////////////
 test('test edit Assignation record',async({page})=>{
 
  const monitorAssign= new monitorAssignationPage(page);
  await monitorAssign.navigatingTo_MonitorAssignationPage ('http://backoffice-prelive.andalusiagroup.net:8090/queuing-management/setups/monitors-assignation')
  await monitorAssign.perform_Edit_MonitorAssignation_Record();
  //Assersion on toaster message of Editing
  const editRecordAssert= monitorAssign.AssertUpdateToaster
  await expect (editRecordAssert).toBeVisible();
 });

 ///////////////////////////////////////DELETE///////////////////////////////////////////////////////
 test ('test delete Assignation record' , async ({page})=>{
  
  const monitorAssign= new monitorAssignationPage(page);
  await monitorAssign.navigatingTo_MonitorAssignationPage ('http://backoffice-prelive.andalusiagroup.net:8090/queuing-management/setups/monitors-assignation')
  await monitorAssign.perform_Delete_MonitorAssignation_Record();
  //Assersion on toaster message of Deleting
  const deleteRecordAssert= monitorAssign.AssertDeleteToaster
  await expect (deleteRecordAssert).toBeVisible();

 });
