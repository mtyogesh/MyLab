FROM centos:centos7
MAINTAINER Yogesh Kumar, yogesh.kumar@ignitetech.com

ENV JAVA_VERSION 8u144
ENV BUILD_VERSION b01
ENV JAVA_DL_HASH 090f390dda5b47b9b721c7dfaa008135
ENV JAVA_HOME /opt/java
ENV PATH $PATH:$JAVA_HOME/bin

# Upgrading system
RUN yum -y update && \
 	yum -y install wget && \
 	yum -y install tar

RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" \
 	http://download.oracle.com/otn-pub/java/jdk/${JAVA_VERSION}-${BUILD_VERSION}/${JAVA_DL_HASH}/jdk-${JAVA_VERSION}-linux-x64.tar.gz && \
 	tar -xvf jdk-${JAVA_VERSION}-linux-x64.tar.gz && \
 	rm jdk*.tar.gz && \
 	mv jdk* ${JAVA_HOME}

# EXPOSE 8080

# install Spring Boot artifact
# VOLUME /tmp
# ADD target/spring-boot-0.0.1-SNAPSHOT.jar /spring-boot-0.0.1-SNAPSHOT.jar
# RUN sh -c 'touch /spring-boot-0.0.1-SNAPSHOT.jar'
ENTRYPOINT ["java", "-jar", "/spring-boot-0.0.1-SNAPSHOT.jar"]