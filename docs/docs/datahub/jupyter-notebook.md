---
sidebar_position: 1
---

# Jupyter Notebook

Let's discover how to analyse IoT Data offloaded with **Datahub** in **Jupyter Notebooks**.
The demo will start a docker container with a pre-run Jupyter Notebook. You can either showcase the analytics with the provided notebook or create your own analysis on your data.

#### What you'll need

- docker compose installed on your machine
- Configured Datahub connection to a cold storage and offloaded data
- A Dremio user with credentials

:::danger[Take care]

As running data analysis can be resource intensive, it is recommended to increase the resources available to the docker daemon.
If you are using macOS and colima, you can increase the resources with:

```bash
colima start --arch aarch64 --vm-type=vz --vz-rosetta --cpu 4 --memory 16
```

If your containers exceed the available resources, your jupyter kernel will crash and you have to rerun the computation with more resources allocated.
You can monitor the resource consumption of the docker daemon with the following command:

```bash
docker container stats
```

:::

## Start your Jupyter Notebook via docker compose

The demo is located in the 'datahub/jupyter-notebook' folder of this repository. To start the demo, clone the full repository to your machine

```bash
git clone github.com/scfx/c8y-demos
```

and navigate to the 'datahub/jupyter-notebook' folder.
Start the demo container with:

```bash
docker compose up
```

The jupyter notebook will run on port 8888. For security reasons the container will be protected by a token. You can find the token in the logs of the started container.
The URL will look like this:

```
http://127.0.0.1:8888/lab?token=yourTokenHere
```

## Add your Datahub credentials in Jupyter Notebook

To offload data with the notebook from your datahub, you need to add your credentials in the second box

```python
host = 'datahub.eu-latest.cumulocity.com' #Change this, if you are not on eu-latest
port = 32010
uid = '' #Use a username here
pwd = '' #Use a  password here
driver = "/opt/arrow-flight-sql-odbc-driver/lib64/libarrow-odbc.so.0.9.1.168"
cnxn=pyodbc.connect("Driver={};ConnectionType=Direct;HOST={};PORT={};AuthenticationType=Plain;UID={};PWD={};SSL=1".format(driver,host,port,uid,pwd),autocommit=True)
```

![Jupyter example plot](jupyter-example-plot.png)

## Add python packages if needed

The container has some standard data analytics python libraries installed like pandas or matplotlib. You can add more packages by modifying the jupyter/Dockerfile.
