SET NAMES UTF8;
DROP DATABASE IF EXISTS Myjiu;
CREATE DATABASE Myjiu CHARSET=UTF8;
USE Myjiu;
CREATE TABLE jiuxian_user(
 uid INT,
 uname VARCHAR(20),
 upwd VARCHAR(20),
 avatar VARCHAR(32),
 phone VARCHAR(32),
 addr  VARCHAR(64)
 );
 INSERT INTO jiuxian_user VALUES(001,'tom','123','','18062055491','湖北省武汉市洪山区');
 INSERT INTO jiuxian_user VALUES(002,'jerry','123','','1353838438','北京市海淀区');
INSERT INTO jiuxian_user VALUES(003,'kalaus','123','','1503832738','上海市徐家汇');
INSERT INTO jiuxian_user VALUES(004,'stefan','123','','1555632738','南京市新街口');
INSERT INTO jiuxian_user VALUES(005,'belva','123','','1885652703','苏州');