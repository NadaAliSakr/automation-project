import {test,expect} from '@playwright/test'
import {monitorSetup} from './monitorSetup.page'

const dynamicValue = Date.now().toString();


test ('check that user can add monitor' , async ({page})=>{

    const monitor= new monitorSetup(page);
    await monitor.navigateToMonitorSetupPage('http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup');
    await monitor.performAddMonitor();
    //Assertion
    const newMonitor=monitor.AssertOffAdd
    await expect(newMonitor).toHaveText('monitor'+dynamicValue);
});


test('check that user can edit monitor name' , async ({page})=> {

    const monitor= new monitorSetup(page);
    await monitor.navigateToMonitorSetupPage('http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup');
    await monitor.performEditMonitor();
    //Assertion
    const newMonitor=monitor.AssertOffEdit
    await expect(newMonitor).toHaveText('monitor'+dynamicValue+'Edited');
});


test ('check that user can delete monitor' , async ({page}) => {

    const monitor= new monitorSetup(page);
    await monitor.navigateToMonitorSetupPage('http://backoffice-systemtest.andalusiagroup.net:8090/queuing-management/setups/monitors-setup');
    await monitor.performDeleteMonitor();
    //Assertion
    const newMonitor=monitor.AssertOffDelete
    await expect(newMonitor).toBeVisible();
});