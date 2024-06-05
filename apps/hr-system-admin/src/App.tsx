import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { MeetingList } from "./meeting/MeetingList";
import { MeetingCreate } from "./meeting/MeetingCreate";
import { MeetingEdit } from "./meeting/MeetingEdit";
import { MeetingShow } from "./meeting/MeetingShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { DayOffList } from "./dayOff/DayOffList";
import { DayOffCreate } from "./dayOff/DayOffCreate";
import { DayOffEdit } from "./dayOff/DayOffEdit";
import { DayOffShow } from "./dayOff/DayOffShow";
import { SickLeaveList } from "./sickLeave/SickLeaveList";
import { SickLeaveCreate } from "./sickLeave/SickLeaveCreate";
import { SickLeaveEdit } from "./sickLeave/SickLeaveEdit";
import { SickLeaveShow } from "./sickLeave/SickLeaveShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"HR System"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="Meeting"
            list={MeetingList}
            edit={MeetingEdit}
            create={MeetingCreate}
            show={MeetingShow}
          />
          <Resource
            name="Employee"
            list={EmployeeList}
            edit={EmployeeEdit}
            create={EmployeeCreate}
            show={EmployeeShow}
          />
          <Resource
            name="DayOff"
            list={DayOffList}
            edit={DayOffEdit}
            create={DayOffCreate}
            show={DayOffShow}
          />
          <Resource
            name="SickLeave"
            list={SickLeaveList}
            edit={SickLeaveEdit}
            create={SickLeaveCreate}
            show={SickLeaveShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
