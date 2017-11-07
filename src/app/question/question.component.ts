import { Component, OnInit } from '@angular/core';

const navData = [{"children":[{"id":1022,"parentid":103,"name":"用户管理","code":"user","url":"#/system/user"},{"id":1023,"parentid":103,"name":"角色管理","code":"role","url":"#/system/role"},{"id":1024,"parentid":103,"name":"菜单管理","code":"menu","url":"#/system/menu"},{"id":1025,"parentid":103,"name":"UI资源","code":"uiresource","url":"#/system/uiresource"},{"id":1026,"parentid":103,"name":"许可证书","url":"#/baseSet/licenseInfo"},{"id":30644,"parentid":103,"name":"图标库管理","code":"imageslib","url":"#/system/imageslib"},{"id":30645,"parentid":103,"name":"视图管理","code":"portlet/dashboard","url":"#/portlet/dashboard"},{"id":30646,"parentid":103,"name":"部件管理","code":"system/widget","url":"#/system/widget"}],"id":103,"parentid":0,"name":"系统管理","code":"system","url":"system"},{"children":[{"id":30830,"parentid":30827,"name":"服务设施","code":"ServiceFacility","url":"#/staticinfo/serviceFacility"},{"id":30831,"parentid":30827,"name":"通行时间","code":"PassageTime","url":"#/staticinfo/passageTime"},{"id":30836,"parentid":30827,"name":"周边情况","code":"PerSituation","url":"#/staticinfo/perSituation"},{"id":30837,"parentid":30827,"name":"设备信息","code":"DeviceInfo","url":"#/staticinfo/deviceInfo"}],"id":30827,"parentid":0,"name":"静态信息","code":"StaticInfo","url":"StaticInfo"},{"children":[{"id":30834,"parentid":30832,"name":"节假日客流特征","code":"HolidayTraffic","url":"#/passengerFlow/holidays"},{"id":30835,"parentid":30832,"name":"平日周客流特征","code":"WeeklyPassengerFlow","url":"#/passengerFlow/weeks"},{"id":30846,"parentid":30832,"name":"客流综合特征","code":"integration","url":"#/passengerFlow/integration"}],"id":30832,"parentid":0,"name":"客流特征","code":"VisitationCharacteristics","url":"VisitationCharacteristics"},{"children":[{"id":30839,"parentid":30838,"name":"年度尖峰特征","code":"YearSpikeCharacteristics","url":"#/spike/year"},{"id":30840,"parentid":30838,"name":"月份尖峰特征","code":"MonthSpikeCharacteristics","url":"#/spike/month"},{"id":30842,"parentid":30838,"name":"周尖峰特征","code":"WeekSpikeCharacteristics","url":"#/spike/week"}],"id":30838,"parentid":0,"name":"尖峰特征","code":"SpikeCharacteristics","url":"SpikeCharacteristics"},{"children":[{"id":30844,"parentid":30843,"name":"综合特征","code":"ODFeatureSynthesis","url":"#/odCharater/composite"},{"id":30853,"parentid":30843,"name":"OD运距特征","code":"ODDistance","url":"#/odCharater/distance"}],"id":30843,"parentid":0,"name":"OD特征","code":"ODCharacter","url":"ODCharacter"},{"children":[{"children":[{"id":30854,"parentid":30851,"name":"汇总","code":"summary","url":"#/equipAnalyse/ticket/summary"},{"id":30855,"parentid":30851,"name":"bom","code":"bom","url":"#/equipAnalyse/ticket/bom"},{"id":30856,"parentid":30851,"name":"tvm","code":"tvm","url":"#/equipAnalyse/ticket/tvm"},{"id":30857,"parentid":30851,"name":"fam","code":"fam","url":"#/equipAnalyse/ticket/fam"}],"id":30851,"parentid":30850,"name":"售票交易量分析","code":"ticket","url":"#/equipAnalyse/ticket"},{"id":30852,"parentid":30850,"name":"闸机交易量分析","code":"gate","url":"#/equipAnalyse/gate"}],"id":30850,"parentid":0,"name":"设备分析","code":"equipAnalyse","url":"equipAnalyse"}];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  width= 500;
  height= 500;
  left= 0;
  top= 0;
  fontSize = 14;
  data = navData;
  parentId: number;
  parentId2: number;
  constructor() { }

  ngOnInit() {
    this.parentId = navData[0].id;
    this.parentId2 = navData[0].children[0].id;
  }

  changeValue(event): void {
    console.log(event);
    this.fontSize = this.fontSize + 1;
  }
  onMousewheel(event): void {
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    const ratioL = (event.clientX - event.target.offsetLeft) / event.target.offsetWidth;
    const ratioT = (event.clientY - event.target.offsetTop) / event.target.offsetHeight;
    this.width = event.toElement.clientWidth;
    this.height = event.toElement.clientHeight;
    this.left = Math.round(event.clientX - (this.width * ratioL));
    this.top = Math.round(event.clientY - (this.top * ratioT));
    if (event.wheelDelta > 0) { // 向上滚动
      this.width = this.width * 1.2;
      this.height = this.height * 1.2;
    }else { // 向下滚动
      if (this.width <= 500) {return; }
      this.width = this.width / 1.2;
      this.height = this.height / 1.2;
    }
  }

  change(nav): void {
    this.parentId = nav.id;
    if (nav.children) {
      this.parentId2 = nav.children[0].id;
    }
  }
}
