"use strict";(self.webpackChunkc_8_y_docs=self.webpackChunkc_8_y_docs||[]).push([[4315],{9488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var i=t(4848),o=t(8453);const s={sidebar_position:2},l="Modbus",d={id:"protocols/modbus",title:"Modbus",description:"Thin-edge.io modbus community plugin.",source:"@site/docs/protocols/modbus.md",sourceDirName:"protocols",slug:"/protocols/modbus",permalink:"/c8y-demos/docs/protocols/modbus",draft:!1,unlisted:!1,editUrl:"https://github.com/scfx/c8y-demos/docs/protocols/modbus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LWM2M",permalink:"/c8y-demos/docs/protocols/lwm2m"},next:{title:"Datahub",permalink:"/c8y-demos/docs/category/datahub"}},a={},r=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Demo",id:"demo",level:2},{value:"Config files",id:"config-files",level:2},{value:"modbus.toml",id:"modbustoml",level:3},{value:"devices.toml",id:"devicestoml",level:3},{value:"Updating the config files",id:"updating-the-config-files",level:3},{value:"Logs and systemd service",id:"logs-and-systemd-service",level:2},{value:"Cumulocity Integration",id:"cumulocity-integration",level:2},{value:"Installation via Software Management",id:"installation-via-software-management",level:3},{value:"Log file access",id:"log-file-access",level:3},{value:"Config management",id:"config-management",level:3},{value:"Cloud Fieldbus",id:"cloud-fieldbus",level:3},{value:"Testing",id:"testing",level:2},{value:"Build",id:"build",level:2},{value:"Debian package",id:"debian-package",level:3},{value:"Deployment",id:"deployment",level:2},{value:"As Python script (for dev only)",id:"as-python-script-for-dev-only",level:3},{value:"As deb file",id:"as-deb-file",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Coding Style",id:"coding-style",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modbus",children:"Modbus"}),"\n",(0,i.jsxs)(n.p,{children:["Thin-edge.io modbus community plugin.\nPlugin for polling Modbus devices and publishing the data to thin-edge.io. If used with Cumulocity IoT, the plugin can be managed via software configuration management. The Plugin also supports some of the ",(0,i.jsx)(n.a,{href:"https://cumulocity.com/guides/protocol-integration/cloud-fieldbus/",children:"cloud fieldbus"})," operations to set the modbus mapping via Cumulocity IoT UI."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The plugin regularly polls Modbus devices and publishes the data to the thin-edge.io broker. The plugin is based on the ",(0,i.jsx)(n.a,{href:"https://pymodbus.readthedocs.io/en/latest/",children:"pymodbus"})," library. After installing, the plugin can be configured by changing the modbus.toml and devices.toml files. The plugin comes with an example config [4] with comments to get you started. Adding multiple servers should also be as simple as adding additional [[device]] sections for each IP address you want to poll."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ubuntu >= 22.04 or Debian >= 11.0"}),"\n",(0,i.jsx)(n.li,{children:"Python >= 3.8"}),"\n",(0,i.jsx)(n.li,{children:"systemd"}),"\n",(0,i.jsx)(n.li,{children:"for operations support: thin-edge.io >= 0.13.0"}),"\n",(0,i.jsx)(n.li,{children:"for demo purposes: docker-compose"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n",(0,i.jsxs)(n.p,{children:["You can run the thin-edge.io with the plugin and a modbus simulator locally via Docker containers. To start the demo, run 'just up' in the root folder of the repository. This will start the tedge container and the modbus simulator.\nThe modbus simulator runs a modbus server with some example registers. The simulator is based on the ",(0,i.jsx)(n.a,{href:"https://pymodbus.readthedocs.io/en/latest/",children:"pymodbus"})," library."]}),"\n",(0,i.jsx)(n.p,{children:"The demo includes a example device that maps an integer and float register to a Child Device."}),"\n",(0,i.jsx)(n.p,{children:"To start the containers, you need to have docker-compose installed. You can start the containers with:"}),"\n",(0,i.jsx)(n.p,{children:"just up"}),"\n",(0,i.jsx)(n.p,{children:"After starting the containers, you need to register the thin-edge.io on your tenant. You can do this by running the following command:"}),"\n",(0,i.jsx)(n.p,{children:"just bootstrap"}),"\n",(0,i.jsx)(n.p,{children:"This will create a device certificate in the tedge container and upload it to your tenant. To skip the manual input of your credentials, you create a .env file in your working directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"    C8Y_BASEURL=https://<tenant>.cumulocity.com\n    C8Y_USER=<user>\n    C8Y_PASSWORD=<password>\n    DEVICE_ID=<External ID of your Test Device>\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can skip the manual bootstrap process by running:"}),"\n",(0,i.jsx)(n.p,{children:"just bootstrap --no-prompt"}),"\n",(0,i.jsx)(n.h2,{id:"config-files",children:"Config files"}),"\n",(0,i.jsx)(n.p,{children:"There are two configuration files you need to edit for your use case. Any changes to the files will restart the polling of the Modbus servers automatically, so you don\u2019t have to worry about restarting any services.\nAll config files are expected to be in the /etc/tedge/plugins/modbus folder.\nAs an alternative the directory can be based with -c or --configdir to the python script like so:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"python3 -m tedge_modbus.reader --configdir <configfolder>"})}),"\n",(0,i.jsx)(n.p,{children:"If used with Cumulocity IoT, the plugins can be managed via the Device Management or created with the cloud fieldbus operations."}),"\n",(0,i.jsx)(n.h3,{id:"modbustoml",children:"modbus.toml"}),"\n",(0,i.jsx)(n.p,{children:"This includes the basic configuration for the plugin such as poll rate and the connection to thin-edge (the MQTT broker needs to match the one of tedge and is probably the default localhost:1883)."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"poll rate"}),"\n",(0,i.jsx)(n.li,{children:"connection to thin-edge (MQTT broker needs to match the one of tedge)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"devicestoml",children:"devices.toml"}),"\n",(0,i.jsx)(n.p,{children:"This file includes the information for the connection(s) to the Modbus server(s) and how the Modbus Registers and Coils map to thin-edge\u2019s Measurements, Events and Alarms."}),"\n",(0,i.jsx)(n.p,{children:"The device config can be managed via Cumulocity IoT or created with the cloud fieldbus operations."}),"\n",(0,i.jsx)(n.h3,{id:"updating-the-config-files",children:"Updating the config files"}),"\n",(0,i.jsx)(n.p,{children:"A watchdog observer will take care of restarting the MQTT and Modbus connection when either\ndevices.toml or modbus.toml changes. So there should be no need to manually restart the\npython script / service."}),"\n",(0,i.jsx)(n.h2,{id:"logs-and-systemd-service",children:"Logs and systemd service"}),"\n",(0,i.jsx)(n.p,{children:"Running the deb installer will place the config files into /etc/tedege/plugins/modbus/.\nIf systemd is installed, it will run the service as part of the post-installation routine."}),"\n",(0,i.jsxs)(n.p,{children:["Check the status of the systemd service with ",(0,i.jsx)(n.code,{children:"sudo systemctl status tedge-modbus-plugin.service"}),"\nWhen running as a service, the default log output goes to /var/log/tedge-modbus-plugin/modbus.log."]}),"\n",(0,i.jsx)(n.h2,{id:"cumulocity-integration",children:"Cumulocity Integration"}),"\n",(0,i.jsx)(n.h3,{id:"installation-via-software-management",children:"Installation via Software Management"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the Software Repository of Cumulocity IoT and thin-edge.io Software Management plugin to install the deb remotely:\nUpload the deb package to the Cumulocity Software Repository. The name ",(0,i.jsx)(n.strong,{children:"must"})," be tedge-modbus-plugin_ and\nthe version ",(0,i.jsx)(n.strong,{children:"must"})," match the version in the *.deb package name (e.g. 1.0.0). The rest of the fields can be set as necessary.\nGo to the Software tab of the target device and select the package for installation. After the operation is successful the plugin will start automatically on the device."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(7488).A+"",width:"1263",height:"640"})}),"\n",(0,i.jsx)(n.h3,{id:"log-file-access",children:"Log file access"}),"\n",(0,i.jsx)(n.p,{children:"For integration with the Cumulocity IoT log plugin add the following line to the /etc/tedge/c8y/c8y-log-plugin.toml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'    { type = "modbus", path = "/var/log/tedge-modbus-plugin/modbus.log" }\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(3316).A+"",width:"1266",height:"627"})}),"\n",(0,i.jsx)(n.h3,{id:"config-management",children:"Config management"}),"\n",(0,i.jsx)(n.p,{children:"Both config files can either be updated in-place (i.e. simply editing with an editor) or\nby using the c8y-configuration plugin. Add the following lines to the c8y-configuration-plugin.toml\nto be able to access them from the Cumulocity Configuration UI:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"  {path = '/etc/tedge/plugins/modbus/modbus.toml', type='modbus'},\n  {path = '/etc/tedge/plugins/modbus/devices.toml', type='modbus-devices'}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To replace the files with a version from the Cumulocity Configuration Repository you have to download a copy,\nedit it and upload it to the repository. The device type ",(0,i.jsx)(n.strong,{children:"must"})," be set to ",(0,i.jsx)(n.em,{children:"thin-edge.io"})," and the config type must match\nthe definition in your c8y-configuration-plugin.toml. I.e either ",(0,i.jsx)(n.em,{children:"modbus"})," (for modbus.toml) or ",(0,i.jsx)(n.em,{children:"modbus-devices"})," for (devices.toml)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(5312).A+"",width:"1148",height:"432"})}),"\n",(0,i.jsx)(n.h3,{id:"cloud-fieldbus",children:"Cloud Fieldbus"}),"\n",(0,i.jsxs)(n.p,{children:["The plugin supports the ",(0,i.jsx)(n.a,{href:"https://cumulocity.com/guides/protocol-integration/cloud-fieldbus/",children:"cloud fieldbus"})," operations to set the modbus mapping via Cumulocity IoT UI.\nAs of now, the plugin only supports the following operations:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"c8y_ModbusDevice"}),"\n",(0,i.jsx)(n.li,{children:"Mapping of registers to Measurements with c8y_ModbusConfiguration"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To create a Cloud Fieldbus Device in Cumulocity IoT, you need first to create a Modbus protocol. Open the Device protocols page in your Device Management and add a new Modbus protocol.\nThe configuration of your protocol depends on your Modbus Server. If you are using the Modbus Demo simulator, the you can use the following configuration:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(7496).A+"",width:"1476",height:"1093"})}),"\n",(0,i.jsx)(n.p,{children:"After creating the protocol, you can add a new Cloud Fieldbus Device. Select the Modubs Tab on your thin-edge.io and add a new tcp device. If you are using the Modbus Demo simulator, you need to add the IP-Address of your Docker host, as Hostnames are not supported by the UI."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:t(3158).A+"",width:"1280",height:"184"})}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsx)(n.p,{children:"To run the tests locally, you need to provide your Cumulocity credentials as environment variables in a .env file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"    C8Y_BASEURL=https://<tenant>.cumulocity.com\n    C8Y_USER=<user>\n    C8Y_PASSWORD=<password>\n    DEVICE_ID=<External ID of your Test Device>\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you have the simulator and the tedge container running, you can run the tests with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"      just venv\n      just setup\n      just test\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,i.jsx)(n.p,{children:"A package of the plugin, including the Modbus polling service and the Cloud Fieldbus operations, can be build with nfpm. To build the packages locally, make sure to install nfpm first.\nThe package requires a python3 installation on your device. The postinstallation script will create a virtualenv and install all dependencies. The virtualenv will be located in /etc/tedge/plugins/modbus The service will be started automatically after installation."}),"\n",(0,i.jsx)(n.p,{children:"To create the packages, you need to install nfpm first:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://nfpm.goreleaser.com/install/",children:"Install nfpm"})}),"\n",(0,i.jsx)(n.h3,{id:"debian-package",children:"Debian package"}),"\n",(0,i.jsx)(n.p,{children:"After installing, you can build the Debian package with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"nfpm pkg --packager deb --target /tmp/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(n.h3,{id:"as-python-script-for-dev-only",children:"As Python script (for dev only)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"copy modbus-plugin folder to target device"}),"\n",(0,i.jsx)(n.li,{children:"ssh into device and go to the plugin folder"}),"\n",(0,i.jsxs)(n.li,{children:["create the virtualenv with ",(0,i.jsx)(n.code,{children:"python -m venv venv"})]}),"\n",(0,i.jsxs)(n.li,{children:["activate venv environment with ",(0,i.jsx)(n.code,{children:"source ./venv/bin/activate"})]}),"\n",(0,i.jsxs)(n.li,{children:["install all dependencies with ",(0,i.jsx)(n.code,{children:"python -m pip install -r requirements.txt"})]}),"\n",(0,i.jsxs)(n.li,{children:["run the reader with ",(0,i.jsx)(n.code,{children:"python tedge_modbus/reader/reader.py -c ./config"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"as-deb-file",children:"As deb file"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"sudo dpkg -i tedge-modbus-plugin-<version>-<arch>.deb"})]}),"\n",(0,i.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsx)(n.h3,{id:"coding-style",children:"Coding Style"}),"\n",(0,i.jsx)(n.p,{children:"The python project uses both black and pylint to enforce a specific coding style."}),"\n",(0,i.jsx)(n.p,{children:"Before you submit a PR you should run the following commands, otherwise your PR will not be merged:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Format all of the python code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"just format\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check python linting"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"just lint\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5312:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/cm-d4e049bbf4b8bfc16ce00da43e15f444.png"},3316:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/log-39caae114a1b19c9d993913bde48a3eb.png"},7496:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/protocol-12b3d0d196db4de78b132a96ef7e197b.png"},7488:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sm-04a0c718313ca5c1eefacc807a4c7c20.png"},3158:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/tcp_device-a8e36d8da460b7c2d50875f546af0f22.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(6540);const o={},s=i.createContext(o);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);