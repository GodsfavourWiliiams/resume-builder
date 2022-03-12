import React from "react";
import Tabs from "./tabs";
import Panel from "./panel";
import Email from "./settingsComponent/Email";
import Template from './settingsComponent/template';
import Language from './settingsComponent/language';
import Password from './settingsComponent/password';
import Delete from './settingsComponent/deleteAccount';

export default function App() {
  return (
    <Tabs>
        <Panel title="Template">
                 <Template/>
         </Panel>
            <Panel title="Language">
                <Language/>
             </Panel>
                <Panel title="Email">
                    <Email/>
                </Panel>
              <Panel title="Account Delete">
                <Delete/>
            </Panel>
        <Panel title="Password">
                <Password/>
        </Panel>
    </Tabs>
  );
}

