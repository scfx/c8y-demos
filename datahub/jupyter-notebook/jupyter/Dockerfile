from jupyter/base-notebook:x86_64-python-3.11.6

ARG DOWNLOAD_LINK

# Install dependencies for ODBC
USER root

RUN apt-get update && apt-get install -y \
    alien \
    unixodbc \
    unixodbc-dev \
    odbcinst \
    curl
#     g++ \
#     alien \
#     # Add other dependencies here
#     && rm -rf /var/lib/apt/lists/* 

# Download and install the Dremio ODBC driver
RUN curl -L -o /tmp/dremio-odbc.rpm $DOWNLOAD_LINK
RUN alien -i /tmp/dremio-odbc.rpm


#Install Python packages
RUN pip install --upgrade pip
RUN pip install pyodbc
RUN pip install pandas
RUN pip install matplotlib
RUN pip install pyarrow


