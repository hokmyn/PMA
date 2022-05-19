"use strict";(self.webpackChunkapp_name=self.webpackChunkapp_name||[]).push([[264],{2264:(ft,A,r)=>{r.r(A),r.d(A,{BoardModule:()=>Ct});var c=r(8583),C=r(4655),O=r(9921),u=r(2238),M=r(2324),f=r(5257),N=r(3071),l=r(3679),t=r(7716),g=r(1095),d=r(8295),E=r(6106),k=r(7441),x=r(8435);function R(n,_){1&n&&(t.TgZ(0,"span"),t._uU(1,"Please enter a title"),t.qZA())}function P(n,_){1&n&&(t.TgZ(0,"span"),t._uU(1," The title is too short"),t.qZA())}function I(n,_){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,R,2,0,"span",9),t.YNc(2,P,2,0,"span",9),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.title.errors?null:e.taskInfoForm.controls.title.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.title.errors?null:e.taskInfoForm.controls.title.errors.minlength)}}function L(n,_){1&n&&(t.TgZ(0,"span"),t._uU(1," The description is too long"),t.qZA())}function Z(n,_){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,L,2,0,"span",9),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.description.errors?null:e.taskInfoForm.controls.description.errors.maxlength)}}function b(n,_){if(1&n&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.viewValue,"")}}function D(n,_){1&n&&(t.TgZ(0,"span"),t._uU(1,"Please select a user"),t.qZA())}function F(n,_){if(1&n&&(t.TgZ(0,"mat-error"),t.YNc(1,D,2,0,"span",9),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.userId.errors?null:e.taskInfoForm.controls.userId.errors.required)}}function v(n,_){if(1&n&&(t.TgZ(0,"form",6),t.TgZ(1,"mat-form-field",7),t.TgZ(2,"mat-label"),t._uU(3,"Title"),t.qZA(),t._UZ(4,"input",8),t.YNc(5,I,3,2,"mat-error",9),t.qZA(),t.TgZ(6,"mat-form-field",7),t.TgZ(7,"mat-label"),t._uU(8,"Description"),t.qZA(),t._UZ(9,"textarea",10),t.YNc(10,Z,2,1,"mat-error",9),t.qZA(),t.TgZ(11,"mat-form-field",11),t.TgZ(12,"mat-label"),t._uU(13,"User"),t.qZA(),t.TgZ(14,"mat-select",12),t.YNc(15,b,2,2,"mat-option",13),t.ALo(16,"async"),t.qZA(),t.YNc(17,F,2,1,"mat-error",9),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("formGroup",e.taskInfoForm),t.xp6(5),t.Q6J("ngIf",e.taskInfoForm.controls.title.invalid&&e.taskInfoForm.controls.title.touched),t.xp6(5),t.Q6J("ngIf",e.taskInfoForm.controls.description.invalid&&e.taskInfoForm.controls.description.touched),t.xp6(5),t.Q6J("ngForOf",t.lcZ(16,5,e.users$)),t.xp6(2),t.Q6J("ngIf",e.taskInfoForm.controls.userId.invalid&&e.taskInfoForm.controls.userId.touched)}}function $(n,_){if(1&n&&(t.TgZ(0,"div",4),t.YNc(1,v,18,7,"form",5),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.taskInfoForm)}}let U=(()=>{class n{constructor(e,o,i){this.task=e,this.userService=o,this.fb=i}ngOnInit(){this.userService.initUsers(),this.users$=this.userService.getUsers(),this.taskInfoForm=this.fb.group({title:this.fb.control(this.task.title,[l.kI.required,l.kI.minLength(3)]),description:this.fb.control(this.task.description,[l.kI.maxLength(250)]),userId:this.fb.control(this.task.userId,[l.kI.required])})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.WI),t.Y36(N.K),t.Y36(l.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-task-info-popup-shell"]],features:[t._Bn([N.K])],decls:7,vars:5,consts:[["mat-dialog-content","",4,"ngIf"],[1,"form-task-info-controls"],["mat-button","",3,"mat-dialog-close","disabled"],["mat-button","","mat-dialog-close",""],["mat-dialog-content",""],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["appearance","fill",1,"task-info-form-field"],["matInput","","formControlName","title"],[4,"ngIf"],["matInput","","formControlName","description"],["appearance","fill"],["formControlName","userId"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,o){1&e&&(t.YNc(0,$,2,1,"div",0),t.ALo(1,"async"),t.TgZ(2,"mat-dialog-actions",1),t.TgZ(3,"button",2),t._uU(4," Edit "),t.qZA(),t.TgZ(5,"button",3),t._uU(6,"Cancel"),t.qZA(),t.qZA()),2&e&&(t.Q6J("ngIf",t.lcZ(1,3,o.users$)&&o.task),t.xp6(3),t.Q6J("mat-dialog-close",o.taskInfoForm.value)("disabled",o.taskInfoForm.invalid))},directives:[c.O5,u.H8,g.lW,u.ZT,u.xY,l._Y,l.JL,l.sg,d.KE,d.hX,E.Nt,l.Fj,l.JJ,l.u,k.gD,c.sg,d.TO,x.ey],pipes:[c.Ov],styles:[".task-info-form-field[_ngcontent-%COMP%]{padding-bottom:15px;text-align:left;width:450px}.form-task-info-controls[_ngcontent-%COMP%]{justify-content:flex-end}"]}),n})();var S=r(6627);function B(n,_){1&n&&(t.TgZ(0,"mat-error"),t.SDv(1,12),t.qZA())}function y(n,_){1&n&&(t.TgZ(0,"mat-error"),t.SDv(1,13),t.qZA())}function w(n,_){1&n&&(t.TgZ(0,"mat-error"),t.SDv(1,14),t.qZA())}function q(n,_){1&n&&(t.TgZ(0,"mat-error"),t.SDv(1,15),t.qZA())}let J=(()=>{class n{constructor(e,o){this.fb=e,this.dialogRef=o}ngOnInit(){this.formCreateTask=this.fb.group({title:this.fb.control("",[l.kI.required,l.kI.minLength(3)]),description:this.fb.control("",[l.kI.required,l.kI.minLength(3)])})}onNoClick(){this.dialogRef.close()}onSubmit(){this.formCreateTask.markAsTouched(),this.formCreateTask.valid&&this.dialogRef.close(this.formCreateTask.value)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.qu),t.Y36(u.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-task-form"]],decls:18,vars:5,consts:function(){let _,e,o,i,s,a,p,m;return _="Title",e="Description",o=" No Thanks ",i=" Create ",s=" Fill box is required. ",a=" Min length 3. ",p=" Fill box is required. ",m=" Min length 3. ",[[3,"formGroup","submit"],["appearance","fill"],_,["matInput","","formControlName","title"],[4,"ngIf"],e,["matInput","","formControlName","description"],["mat-dialog-actions",""],["mat-button","",3,"click"],o,["mat-button","","type","submit","cdkFocusInitial","",3,"click"],i,s,a,p,m]},template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("submit",function(){return o.formCreateTask.valid&&o.formCreateTask.markAllAsTouched()}),t.TgZ(1,"mat-form-field",1),t.TgZ(2,"mat-label"),t.SDv(3,2),t.qZA(),t._UZ(4,"input",3),t.YNc(5,B,2,0,"mat-error",4),t.YNc(6,y,2,0,"mat-error",4),t.qZA(),t.TgZ(7,"mat-form-field",1),t.TgZ(8,"mat-label"),t.SDv(9,5),t.qZA(),t._UZ(10,"textarea",6),t.YNc(11,w,2,0,"mat-error",4),t.YNc(12,q,2,0,"mat-error",4),t.qZA(),t.TgZ(13,"div",7),t.TgZ(14,"button",8),t.NdJ("click",function(){return o.onNoClick()}),t.SDv(15,9),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){return o.onSubmit()}),t.SDv(17,11),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",o.formCreateTask),t.xp6(5),t.Q6J("ngIf",o.formCreateTask.get("title").hasError("required")),t.xp6(1),t.Q6J("ngIf",o.formCreateTask.get("title").hasError("minlength")),t.xp6(5),t.Q6J("ngIf",o.formCreateTask.get("description").hasError("required")),t.xp6(1),t.Q6J("ngIf",o.formCreateTask.get("description").hasError("minlength")))},directives:[l._Y,l.JL,l.sg,d.KE,d.hX,E.Nt,l.Fj,l.JJ,l.u,c.O5,u.H8,g.lW,d.TO],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:400px}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),n})();var h=r(3738);let Y=(()=>{class n{constructor(){this.deleteTask=new t.vpe,this.showTaskInfo=new t.vpe}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-task"]],inputs:{task:"task"},outputs:{deleteTask:"deleteTask",showTaskInfo:"showTaskInfo"},decls:10,vars:6,consts:[[1,"task-item"],[1,"task-item-content",3,"click"],[1,"task-item-title"],["mat-mini-fab","",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-content",1),t.NdJ("click",function(){return o.showTaskInfo.emit()}),t.TgZ(2,"h3",2),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"slice"),t.qZA(),t.qZA(),t.TgZ(7,"button",3),t.NdJ("click",function(){return o.deleteTask.emit(o.task)}),t.TgZ(8,"mat-icon"),t._uU(9,"delete_outline"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.hij(" ",o.task.title," "),t.xp6(2),t.Oqu(t.Dn7(6,2,o.task.description,0,50)))},directives:[h.a8,h.dn,g.lW,S.Hw],pipes:[c.OU],styles:[".task-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;border-radius:10px;background-color:#f7ede2;max-width:100%;overflow:hidden;cursor:pointer;margin-bottom:10px}.task-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.task-item-content[_ngcontent-%COMP%]{width:80%;overflow:hidden;padding-right:10px;text-overflow:ellipsis;white-space:normal}.task-item-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]}),n})();function G(n,_){1&n&&(t.TgZ(0,"span"),t.SDv(1,15),t.qZA())}function Q(n,_){1&n&&(t.TgZ(0,"span"),t.SDv(1,16),t.qZA())}function X(n,_){1&n&&(t.TgZ(0,"span"),t.SDv(1,17),t.qZA())}function K(n,_){if(1&n&&(t.TgZ(0,"mat-error",13),t.YNc(1,G,2,0,"span",14),t.YNc(2,Q,2,0,"span",14),t.YNc(3,X,2,0,"span",14),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.title.errors?null:e.title.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.title.errors?null:e.title.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==e.title.errors?null:e.title.errors.maxlength)}}function H(n,_){if(1&n&&(t.TgZ(0,"form",10),t._UZ(1,"input",11),t.YNc(2,K,4,3,"mat-error",12),t.qZA()),2&n){const e=t.oxw();t.Q6J("formGroup",e.columnForm),t.xp6(2),t.Q6J("ngIf",e.title.invalid&&e.title.touched)}}function z(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSubmit()}),t.SDv(1,19),t.qZA()}}function j(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().onEditTitle()}),t.SDv(1,20),t.qZA()}}function W(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"h4",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().onEditTitle()}),t.SDv(1,22),t.qZA()}if(2&n){const e=t.oxw();t.Udp("color","#14213d"),t.xp6(1),t.pQV(e.column.title),t.QtT(1)}}function V(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.onDeleteColumn(i.column)}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function tt(n,_){1&n&&(t.TgZ(0,"p"),t.SDv(1,23),t.qZA())}function et(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"app-task",25),t.NdJ("deleteTask",function(){const s=t.CHM(e).$implicit,a=t.oxw(2);return a.deleteTask.emit({task:s,columnId:a.column.id})})("showTaskInfo",function(){const s=t.CHM(e).$implicit,a=t.oxw(2);return a.showTask.emit({task:s,columnId:a.column.id})}),t.qZA()}2&n&&t.Q6J("task",_.$implicit)}function nt(n,_){if(1&n&&t.YNc(0,et,1,1,"app-task",24),2&n){const e=t.oxw();t.Q6J("ngForOf",e.column.tasks)}}let ot=(()=>{class n{constructor(e,o){this.dialog=e,this.formBuilder=o,this.deleteColumn=new t.vpe(null),this.editColumn=new t.vpe,this.addTask=new t.vpe,this.deleteTask=new t.vpe,this.showTask=new t.vpe,this.isEdit=!1}ngOnInit(){this.columnForm=this.formBuilder.group({title:[this.column.title,[l.kI.required,l.kI.minLength(3),l.kI.maxLength(100)]]})}onDeleteColumn(e){this.deleteColumn.emit(e)}onAddTask(e){const o=this.dialog.open(J),s=e.tasks.length;o.afterClosed().pipe((0,f.q)(1)).subscribe(a=>{if(a){const p=Object.assign(Object.assign({},a),{order:s,done:!1});this.addTask.emit({task:p,columnId:this.column.id})}})}onEditTitle(){this.isEdit=!this.isEdit}onSubmit(){this.isEdit=!this.isEdit,this.editColumn.emit(Object.assign(Object.assign({id:this.column.id},this.columnForm.value),{order:this.column.order}))}get title(){return this.columnForm.get("title")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.uw),t.Y36(l.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-column"]],inputs:{column:"column",index:"index"},outputs:{deleteColumn:"deleteColumn",editColumn:"editColumn",addTask:"addTask",deleteTask:"deleteTask",showTask:"showTask"},decls:14,vars:7,consts:function(){let _,e,o,i,s,a,p;return _="Please enter a title",e=" The title is too short",o=" The title is too long",i=" submit ",s=" cancel ",a=" Title: " + "\ufffd0\ufffd" + " ",p=" Task list is empty ",[[1,"title-column"],["name","columnForm",3,"formGroup",4,"ngIf"],["class","btn-form-column","color","warn","mat-raised-button","",3,"click",4,"ngIf"],[3,"color","click",4,"ngIf"],["mat-mini-fab","",3,"click",4,"ngIf"],[1,"column"],["mat-mini-fab","",3,"click"],[1,"tasks"],[4,"ngIf","ngIfElse"],["tasks",""],["name","columnForm",3,"formGroup"],["formControlName","title","matInput","",1,"column-form-input"],["class","input-error",4,"ngIf"],[1,"input-error"],[4,"ngIf"],_,e,o,["color","warn","mat-raised-button","",1,"btn-form-column",3,"click"],i,s,[3,"click"],a,p,[3,"task","deleteTask","showTaskInfo",4,"ngFor","ngForOf"],[3,"task","deleteTask","showTaskInfo"]]},template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,H,3,2,"form",1),t.YNc(2,z,2,0,"button",2),t.YNc(3,j,2,0,"button",2),t.YNc(4,W,2,3,"h4",3),t.YNc(5,V,3,0,"button",4),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"button",6),t.NdJ("click",function(){return o.onAddTask(o.column)}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.YNc(11,tt,2,0,"p",8),t.qZA(),t.YNc(12,nt,1,1,"ng-template",null,9,t.W1O),t.qZA()),2&e){const i=t.MAs(13);t.xp6(1),t.Q6J("ngIf",o.isEdit&&o.columnForm),t.xp6(1),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",!o.isEdit),t.xp6(1),t.Q6J("ngIf",!o.isEdit),t.xp6(6),t.Q6J("ngIf",!o.column.tasks.length)("ngIfElse",i)}},directives:[c.O5,g.lW,S.Hw,l._Y,l.JL,l.sg,l.Fj,E.Nt,l.JJ,l.u,d.TO,c.sg,Y],styles:[".title-column[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px 20px}.title-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.column[_ngcontent-%COMP%]{border:solid 1px rgba(192,192,192,.27);border-radius:6px!important;padding:10px;min-width:350px;max-width:350px;background-color:#dbcfc1;margin-right:16px;height:calc(100vh - 500px);overflow:auto}.column[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:10px}.btn-form-column[_ngcontent-%COMP%]{text-transform:capitalize;padding:0;border-radius:4px;font-style:normal;font-weight:400;font-size:12px}.column-form-input[_ngcontent-%COMP%]{display:block;width:100%;height:24px;background-color:#efefef;border:solid 1px #e07a5f;border-radius:5px}"]}),n})();var _t=r(4885);function it(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"app-column",10),t.NdJ("deleteColumn",function(i){return t.CHM(e),t.oxw(3).onDeleteColumn(i)})("editColumn",function(i){return t.CHM(e),t.oxw(3).onEditColumn(i)})("addTask",function(i){return t.CHM(e),t.oxw(3).onAddTask(i)})("deleteTask",function(i){return t.CHM(e),t.oxw(3).onDeleteTask(i)})("showTask",function(i){return t.CHM(e),t.oxw(3).onShowTaskDialog(i)}),t.qZA()}if(2&n){const o=_.index;t.Q6J("column",_.$implicit)("index",o)}}function lt(n,_){if(1&n&&(t.ynx(0),t.TgZ(1,"div",8),t.YNc(2,it,1,2,"app-column",9),t.ALo(3,"async"),t.qZA(),t.BQk()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,e.boards$).columns)}}function rt(n,_){1&n&&(t.TgZ(0,"div",11),t.SDv(1,12),t.qZA())}const st=function(){return["../"]},at=function(n,_){return{columnTrue:n,columnFalse:_}},ct=function(n,_){return{emptyBtn:n,fullBtn:_}};function mt(n,_){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",2),t.TgZ(2,"a",3),t.TgZ(3,"mat-icon"),t._uU(4,"arrow_back"),t.qZA(),t.qZA(),t.TgZ(5,"h2"),t._uU(6),t.ALo(7,"async"),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.ALo(9,"async"),t.ALo(10,"async"),t.YNc(11,lt,4,3,"ng-container",0),t.ALo(12,"async"),t.YNc(13,rt,2,0,"ng-template",null,5,t.W1O),t.TgZ(15,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw().addColumn()}),t.SDv(16,7),t.ALo(17,"async"),t.ALo(18,"async"),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.MAs(14),o=t.oxw();t.xp6(2),t.Q6J("routerLink",t.DdM(18,st)),t.xp6(4),t.Oqu(t.lcZ(7,6,o.boards$).title),t.xp6(2),t.Q6J("ngClass",t.WLB(19,at,t.lcZ(9,8,o.boards$).columns.length>0,t.lcZ(10,10,o.boards$).columns.length<1)),t.xp6(3),t.Q6J("ngIf",t.lcZ(12,12,o.boards$).columns.length)("ngIfElse",e),t.xp6(4),t.Q6J("ngClass",t.WLB(22,ct,t.lcZ(17,14,o.boards$).columns.length<1,t.lcZ(18,16,o.boards$).columns.length>0))}}function ut(n,_){1&n&&t._UZ(0,"mat-spinner")}const pt=[{path:"",component:(()=>{class n{constructor(e,o,i){this.route=e,this.boardService=o,this.dialog=i}ngOnInit(){this.route.queryParams.subscribe(e=>{this.boardService.initBoards(e.id),this.boards$=this.boardService.getBoards()})}onAddTask(e){const o=JSON.parse(localStorage.getItem("login")).id,i=Object.assign(Object.assign({},e.task),{userId:o});this.boardService.addTask(e.columnId,i)}addColumn(){this.openDialog(M.a,{data:{inputTitle:!0}}).pipe((0,f.q)(1)).subscribe(o=>{o&&this.boardService.addColumn(o)})}onDeleteColumn(e){this.openDialog(M.a,{data:{nameItem:e.title}}).pipe((0,f.q)(1)).subscribe(i=>{i&&this.boardService.deleteColumn(e.id)})}onEditColumn(e){this.boardService.editColumn(e)}onDeleteTask(e){this.openDialog(M.a,{data:{nameItem:e.task.title}}).pipe((0,f.q)(1)).subscribe(i=>{i&&this.boardService.deleteTask(e.task.id,e.columnId)})}openDialog(e,o){return this.dialog.open(e,o).afterClosed()}onShowTaskDialog({task:e,columnId:o}){const i=new u.vA;i.disableClose=!0,i.autoFocus=!0,i.maxWidth="500px",i.width="100%",i.data=e;const s=this.dialog.open(U,i),a=e.order,p=e.done;s.afterClosed().subscribe(m=>{if(m){const T=Object.assign(Object.assign({},m),{order:a,done:p,columnId:o});this.boardService.editTask(T,e.id)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.gz),t.Y36(O.$),t.Y36(u.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-board-shell"]],features:[t._Bn([O.$])],decls:4,vars:4,consts:function(){let _,e;return _=" + Add column ",e="Non column",[[4,"ngIf","ngIfElse"],["spinner",""],[1,"board-title-container"],[1,"back-btn",3,"routerLink"],[3,"ngClass"],["emptyColumn",""],["mat-raised-button","","color","warn","aria-label","Created column","type","button",3,"ngClass","click"],_,[1,"column-wrap"],[3,"column","index","deleteColumn","editColumn","addTask","deleteTask","showTask",4,"ngFor","ngForOf"],[3,"column","index","deleteColumn","editColumn","addTask","deleteTask","showTask"],[1,"empty"],e]},template:function(e,o){if(1&e&&(t.YNc(0,mt,19,25,"ng-container",0),t.ALo(1,"async"),t.YNc(2,ut,1,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,o.boards$))("ngIfElse",i)}},directives:[c.O5,C.yS,S.Hw,c.mk,g.lW,c.sg,ot,_t.$g],pipes:[c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;padding:50px 50px 20px;height:100%;overflow:auto}[_nghost-%COMP%]   .board-title-container[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .back-btn[_ngcontent-%COMP%]{transform:scale(1.6);width:50px;color:#e07a5f}[_nghost-%COMP%]   .columnTrue[_ngcontent-%COMP%]{display:flex;flex-direction:row}[_nghost-%COMP%]   .columnFalse[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin-top:60px;margin-bottom:20px;min-width:200px;font-size:20px;height:inherit;margin-right:20px}[_nghost-%COMP%]   button.emptyBtn[_ngcontent-%COMP%]{margin:20px auto 0;height:40px;width:20px}[_nghost-%COMP%]   button.fullBtn[_ngcontent-%COMP%]{width:200px;height:150px}[_nghost-%COMP%]   .column-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:50%}[_nghost-%COMP%]   .empty[_ngcontent-%COMP%]{margin:150px auto 0;width:100px}"]}),n})()}];let Tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[C.Bz.forChild(pt)],C.Bz]}),n})();var dt=r(5205),gt=r(4466);let Ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[O.$],imports:[[c.ez,Tt,dt.q,gt.m,l.UX,l.u5]]}),n})()}}]);