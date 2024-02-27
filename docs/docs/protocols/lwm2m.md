---
sidebar_position: 2
---

# LWM2M

An example Demo client to showcase how to connect and manage LWM2M devices with Cumulocity IoT can be found on github [(github.com/SoftwareAG/cumulocity-lwm2m-demo)](https://github.com/SoftwareAG/cumulocity-lwm2m-demo). The Demo will simulate multiple LWM2M devices that publish temperature data to Cumulocity IoT.

## What you'll need

- Docker Compose installed on your machine
- LWM2M-agent application on your tenant

## Getting started

Clone the repo via:

```shell
git clone https://github.com/SoftwareAG/cumulocity-lwm2m-demo.git
```

Before the demo client can be connected to the platform, the endpoint and URI definition in the registration and docker-compose file need to be prepared for the bootstrap server configuration.

registration.csv
In the registration.csv file, the fields for endpoint ID and LWM2M server URI must be checked. The endpoint ID is required by the bootstrap process to provision the LwM2M client with the bootstrap information. Ensure that the endpoint ID is unique and hasn't been used before to register a device. Otherwise, this will result in an error. Additionally, the LWM2M server URI needs to contain the correct hosting environment that you or your company is using. This should be one of the following public cloud instances:

- apj.cumulocity.com
- cumulocity.com
- eu-latest.cumulocity.com
- us.cumulocity.com
- emea.cumulocity.com

coap://lwm2m.**eu-latest.cumulocity.com**:5783

Your individual tenant prefix is not required since there is only one LWM2M server for each public cloud instance.
:::tip[Cumulocity Version]

Please note that this registration file is only applicable for the dedicated LWM2M bulk registration process introduced with version 10.15. If you are still using an older version of Cumulocity IoT, use the template for the general bulk registration available in the documentation.
:::

![L2M2M registration](./img/lwm2m_registration.png)

### docker-compose.yaml

Edit the docker-compose.yaml and change the endpoint ID and URI in the environment variables for all containers so that they match the entries in the registration file.

```
version: "4.3"
services:
  lwm2m_client_1:
    build:
      context: leshan-demo-client
      args:
        ENDPOINT: "lwm2m_device01"
        URI: "lwm2m.eu-latest.cumulocity.com"
...
```

## Device Registration

To register a LWM2M device in Cumulocity IoT, upload a CSV file with registration data in the bulk registration dialog in **Device Management -> Devices -> Registration -> Register device -> LWM2M (Bulk Registration)**.

![LWM2M Bulk Registration](./img/lwm2m_bulk_registration.png)

After the registration process was successful, the new LwM2M demo devices will shown in the all device list in **Device Management -> Devices ->All devices.** The devices won’t show any incoming measurement values yet. First the demo client needs to be started and device protocols need to be defined.

Start the demo client with:

```
docker-compose up
```

Further information on how to read and send events, alarms or custom actions from LWM2M devices or how to write to LWM2M objects can be found in the [Cumulocity IoT documentation](https://cumulocity.com/docs/protocol-integration/lwm2m/).

## Upload device protocols to Cumulocity IoT

LwM2M offers a predefined resource and data model that can also be extended to meet specific needs. Each object represents a certain functionality of the client and bundles all respective resources. This demo client uses the following LWM2M objects:

- 3 (device)
- 6 (location),
- 3303 (temperature sensor)
- 3441 (lwm2m test object)

Cumulocity IoT allows any LWM2M objects to be easily interfaced with the platform and supports out-of-the-box integration for the standard LWM2M objects 3(device), 4(connectivity), 5(firmware) and 6(location).

In order to make use of the objects, a protocol definition for each object is required. You can find the protocol definitions as xml files in the resource folder of the cloned github repo. These need to be uploaded to your Cumulocity IoT tenant in the **Device Management -> Device types -> Device protocols** tab.

![Device Protocols](./img/device_protocols.png)

The demo client sends a random temperature measurement at 3303/5700 (object/resource). To activate the functionality, open the LWM2M Device Protocol with the name “3303 Temperature” and turn on Send measurement for the Sensor Value. Do also enable on Auto observe for at least one functionality per protocol. This will instruct the LWM2M device to periodically report data to Cumulocity IoT.

![Send measurements](./img/lwm2m_send_measurement.png)

The LWM2M objects 3 (device) and 6 (location) are supported out-of-the-box and do not need a mapping configuration.

## Define LWM2M post-registration actions

LWM2M shell commands can be performed in the Shell tab of each device. It is also possible to execute some common operations when a device sends a full registration request. In this example the LWM2M post operations will be used the read the current device info (3) and location (6) from the device, if the devices sends a registration request. To do this go to the tab **Device Management -> Device types -> LWM2M post-operations** and add the following:

```
read /3
read /6
```

![LWM2M Post Operation](./img/lwm2m_post_operations.png)
