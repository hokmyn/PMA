"use strict";(self.webpackChunkapp_name=self.webpackChunkapp_name||[]).push([[264],{2264:(Ot,h,l)=>{l.r(h),l.d(h,{BoardModule:()=>ft});var c=l(8583),f=l(4655),E=l(9921),d=l(2238),S=l(2324),g=l(5257),N=l(3071),s=l(3679),t=l(7716),C=l(1095),T=l(8295),x=l(4039),k=l(7441),P=l(8120);function R(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"Please enter a title"),t.qZA())}function I(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1," The title is too short"),t.qZA())}function b(o,r){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,R,2,0,"span",9),t.YNc(2,I,2,0,"span",9),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.title.errors?null:e.taskInfoForm.controls.title.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.title.errors?null:e.taskInfoForm.controls.title.errors.minlength)}}function L(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1," The description is too long"),t.qZA())}function Z(o,r){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,L,2,0,"span",9),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.description.errors?null:e.taskInfoForm.controls.description.errors.maxlength)}}function v(o,r){if(1&o&&(t.TgZ(0,"mat-option",14),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.viewValue,"")}}function D(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"Please select a user"),t.qZA())}function F(o,r){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,D,2,0,"span",9),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==e.taskInfoForm.controls.userId.errors?null:e.taskInfoForm.controls.userId.errors.required)}}function $(o,r){if(1&o&&(t.TgZ(0,"form",6),t.TgZ(1,"mat-form-field",7),t.TgZ(2,"mat-label"),t._uU(3,"Title"),t.qZA(),t._UZ(4,"input",8),t.YNc(5,b,3,2,"mat-error",9),t.qZA(),t.TgZ(6,"mat-form-field",7),t.TgZ(7,"mat-label"),t._uU(8,"Description"),t.qZA(),t._UZ(9,"textarea",10),t.YNc(10,Z,2,1,"mat-error",9),t.qZA(),t.TgZ(11,"mat-form-field",11),t.TgZ(12,"mat-label"),t._uU(13,"User"),t.qZA(),t.TgZ(14,"mat-select",12),t.YNc(15,v,2,2,"mat-option",13),t.ALo(16,"async"),t.qZA(),t.YNc(17,F,2,1,"mat-error",9),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("formGroup",e.taskInfoForm),t.xp6(5),t.Q6J("ngIf",e.taskInfoForm.controls.title.invalid&&e.taskInfoForm.controls.title.touched),t.xp6(5),t.Q6J("ngIf",e.taskInfoForm.controls.description.invalid&&e.taskInfoForm.controls.description.touched),t.xp6(5),t.Q6J("ngForOf",t.lcZ(16,5,e.users$)),t.xp6(2),t.Q6J("ngIf",e.taskInfoForm.controls.userId.invalid&&e.taskInfoForm.controls.userId.touched)}}function w(o,r){if(1&o&&(t.TgZ(0,"div",4),t.YNc(1,$,18,7,"form",5),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.taskInfoForm)}}let U=(()=>{class o{constructor(e,n,i){this.task=e,this.userService=n,this.fb=i}ngOnInit(){this.userService.initUsers(),this.users$=this.userService.getUsers(),this.taskInfoForm=this.fb.group({title:this.fb.control(this.task.title,[s.kI.required,s.kI.minLength(3)]),description:this.fb.control(this.task.description,[s.kI.maxLength(250)]),userId:this.fb.control(this.task.userId,[s.kI.required])})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.WI),t.Y36(N.K),t.Y36(s.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-task-info-popup-shell"]],features:[t._Bn([N.K])],decls:7,vars:5,consts:[["mat-dialog-content","",4,"ngIf"],[1,"form-task-info-controls"],["mat-raised-button","",3,"mat-dialog-close","disabled"],["mat-raised-button","","mat-dialog-close","",1,"btn-close"],["mat-dialog-content",""],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["appearance","fill",1,"task-info-form-field"],["matInput","","formControlName","title"],[4,"ngIf"],["matInput","","formControlName","description"],["appearance","fill"],["formControlName","userId"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,n){1&e&&(t.YNc(0,w,2,1,"div",0),t.ALo(1,"async"),t.TgZ(2,"mat-dialog-actions",1),t.TgZ(3,"button",2),t._uU(4," Change "),t.qZA(),t.TgZ(5,"button",3),t._uU(6,"Cancel"),t.qZA(),t.qZA()),2&e&&(t.Q6J("ngIf",t.lcZ(1,3,n.users$)&&n.task),t.xp6(3),t.Q6J("mat-dialog-close",n.taskInfoForm.value)("disabled",n.taskInfoForm.invalid))},directives:[c.O5,d.H8,C.lW,d.ZT,d.xY,s._Y,s.JL,s.sg,T.KE,T.hX,x.Nt,s.Fj,s.JJ,s.u,k.gD,c.sg,T.TO,P.ey],pipes:[c.Ov],styles:["[_nghost-%COMP%]   .btn-close[_ngcontent-%COMP%]{background-color:#fff!important}.task-info-form-field[_ngcontent-%COMP%]{padding-bottom:15px;text-align:left;width:450px}.form-task-info-controls[_ngcontent-%COMP%]{justify-content:flex-end}"]}),o})();var A=l(6627);function y(o,r){1&o&&(t.TgZ(0,"mat-error"),t.SDv(1,12),t.qZA())}function B(o,r){1&o&&(t.TgZ(0,"mat-error"),t.SDv(1,13),t.qZA())}function q(o,r){1&o&&(t.TgZ(0,"mat-error"),t.SDv(1,14),t.qZA())}function J(o,r){1&o&&(t.TgZ(0,"mat-error"),t.SDv(1,15),t.qZA())}let Y=(()=>{class o{constructor(e,n){this.fb=e,this.dialogRef=n}ngOnInit(){this.formCreateTask=this.fb.group({title:this.fb.control("",[s.kI.required,s.kI.minLength(3)]),description:this.fb.control("",[s.kI.required,s.kI.minLength(3)])})}onNoClick(){this.dialogRef.close()}onSubmit(){this.formCreateTask.markAsTouched(),this.formCreateTask.valid&&this.dialogRef.close(this.formCreateTask.value)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(d.so))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-task-form"]],decls:18,vars:5,consts:function(){let r,e,n,i,_,a,p,m;return r="Title",e="Description",n=" No Thanks ",i=" Create ",_=" Fill box is required. ",a=" Min length 3. ",p=" Fill box is required. ",m=" Min length 3. ",[[3,"formGroup","submit"],["appearance","fill"],r,["matInput","","formControlName","title"],[4,"ngIf"],e,["matInput","","formControlName","description"],["mat-dialog-actions",""],["mat-button","",3,"click"],n,["mat-button","","type","submit","cdkFocusInitial","",3,"click"],i,_,a,p,m]},template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("submit",function(){return n.formCreateTask.valid&&n.formCreateTask.markAllAsTouched()}),t.TgZ(1,"mat-form-field",1),t.TgZ(2,"mat-label"),t.SDv(3,2),t.qZA(),t._UZ(4,"input",3),t.YNc(5,y,2,0,"mat-error",4),t.YNc(6,B,2,0,"mat-error",4),t.qZA(),t.TgZ(7,"mat-form-field",1),t.TgZ(8,"mat-label"),t.SDv(9,5),t.qZA(),t._UZ(10,"textarea",6),t.YNc(11,q,2,0,"mat-error",4),t.YNc(12,J,2,0,"mat-error",4),t.qZA(),t.TgZ(13,"div",7),t.TgZ(14,"button",8),t.NdJ("click",function(){return n.onNoClick()}),t.SDv(15,9),t.qZA(),t.TgZ(16,"button",10),t.NdJ("click",function(){return n.onSubmit()}),t.SDv(17,11),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",n.formCreateTask),t.xp6(5),t.Q6J("ngIf",n.formCreateTask.get("title").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.formCreateTask.get("title").hasError("minlength")),t.xp6(5),t.Q6J("ngIf",n.formCreateTask.get("description").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.formCreateTask.get("description").hasError("minlength")))},directives:[s._Y,s.JL,s.sg,T.KE,T.hX,x.Nt,s.Fj,s.JJ,s.u,c.O5,d.H8,C.lW,T.TO],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:400px}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),o})();var O=l(3828),M=l(3738);let Q=(()=>{class o{constructor(){this.deleteTask=new t.vpe,this.showTaskInfo=new t.vpe}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-task"]],inputs:{task:"task"},outputs:{deleteTask:"deleteTask",showTaskInfo:"showTaskInfo"},decls:10,vars:6,consts:[[1,"task-item"],[1,"task-item-content",3,"click"],[1,"task-item-title"],["mat-stroked-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0),t.TgZ(1,"mat-card-header",1),t.NdJ("click",function(){return n.showTaskInfo.emit()}),t.TgZ(2,"mat-card-title",2),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.ALo(6,"slice"),t.qZA(),t.qZA(),t.TgZ(7,"button",3),t.NdJ("click",function(){return n.deleteTask.emit(n.task)}),t.TgZ(8,"mat-icon"),t._uU(9,"clear"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.hij(" ",n.task.title," "),t.xp6(2),t.Oqu(t.Dn7(6,2,n.task.description,0,50)))},directives:[M.a8,M.dk,M.n5,M.$j,C.lW,A.Hw],pipes:[c.OU],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:10px}mat-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%;border-radius:10px;padding:5px 10px;overflow:hidden}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-overflow:ellipsis}mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;margin:0 0 10px}button[_ngcontent-%COMP%]{margin-left:10px;background-color:inherit!important}"]}),o})();function G(o,r){1&o&&(t.TgZ(0,"span"),t.SDv(1,15),t.qZA())}function X(o,r){1&o&&(t.TgZ(0,"span"),t.SDv(1,16),t.qZA())}function K(o,r){1&o&&(t.TgZ(0,"span"),t.SDv(1,17),t.qZA())}function z(o,r){if(1&o&&(t.TgZ(0,"mat-error",13),t.YNc(1,G,2,0,"span",14),t.YNc(2,X,2,0,"span",14),t.YNc(3,K,2,0,"span",14),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.title.errors?null:e.title.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.title.errors?null:e.title.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==e.title.errors?null:e.title.errors.maxlength)}}function H(o,r){if(1&o&&(t.TgZ(0,"form",10),t._UZ(1,"input",11),t.YNc(2,z,4,3,"mat-error",12),t.qZA()),2&o){const e=t.oxw();t.Q6J("formGroup",e.columnForm),t.xp6(2),t.Q6J("ngIf",e.title.invalid&&e.title.touched)}}function j(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().onSubmit()}),t.SDv(1,19),t.qZA()}}function W(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(e),t.oxw().onEditTitle()}),t.SDv(1,20),t.qZA()}}function V(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"p",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().onEditTitle()}),t.SDv(1,22),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.pQV(e.column.title.slice(0,1).toUpperCase()+e.column.title.slice(1)),t.QtT(1)}}function tt(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return i.onDeleteColumn(i.column)}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA()}}function et(o,r){1&o&&(t.TgZ(0,"p"),t.SDv(1,23),t.qZA())}function ot(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"app-task",26),t.NdJ("deleteTask",function(){const _=t.CHM(e).$implicit,a=t.oxw(2);return a.deleteTask.emit({task:_,columnId:a.column.id})})("showTaskInfo",function(){const _=t.CHM(e).$implicit,a=t.oxw(2);return a.showTask.emit({task:_,columnId:a.column.id})}),t.qZA()}2&o&&t.Q6J("task",r.$implicit)}function nt(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",24),t.NdJ("cdkDropListDropped",function(i){return t.CHM(e),t.oxw().drop(i)}),t.YNc(1,ot,1,1,"app-task",25),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("cdkDropListData",e.column.tasks),t.xp6(1),t.Q6J("ngForOf",e.column.tasks)}}let rt=(()=>{class o{constructor(e,n){this.dialog=e,this.formBuilder=n,this.deleteColumn=new t.vpe(null),this.editColumn=new t.vpe,this.addTask=new t.vpe,this.deleteTask=new t.vpe,this.showTask=new t.vpe,this.movedTask=new t.vpe,this.isEdit=!1}ngOnInit(){console.log(this.columns),this.column.tasks.sort((e,n)=>e.order-n.order),this.columnForm=this.formBuilder.group({title:[this.column.title,[s.kI.required,s.kI.minLength(3),s.kI.maxLength(100)]]})}onDeleteColumn(e){this.deleteColumn.emit(e)}onAddTask(e){const n=this.dialog.open(Y),_=e.tasks.length;n.afterClosed().pipe((0,g.q)(1)).subscribe(a=>{if(a){const p=Object.assign(Object.assign({},a),{order:_,done:!1});this.addTask.emit({task:p,columnId:this.column.id})}})}drop(e){if(e.previousContainer===e.container){if(e.previousIndex!==e.currentIndex){(0,O.bA)(e.container.data,e.previousIndex,e.currentIndex);const n=this.updatedTasks();this.movedTask.emit({tasks:n,column:this.column})}}else(0,O.EA)(e.previousContainer.data,e.container.data,e.previousIndex,e.currentIndex)}onEditTitle(){this.isEdit=!this.isEdit}onSubmit(){this.isEdit=!this.isEdit,this.editColumn.emit(Object.assign(Object.assign({id:this.column.id},this.columnForm.value),{order:this.column.order}))}get title(){return this.columnForm.get("title")}updatedTasks(){return this.column.tasks.map((e,n)=>(e.order=n,e))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.uw),t.Y36(s.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-column"]],inputs:{column:"column",index:"index",columns:"columns"},outputs:{deleteColumn:"deleteColumn",editColumn:"editColumn",addTask:"addTask",deleteTask:"deleteTask",showTask:"showTask",movedTask:"movedTask"},decls:14,vars:7,consts:function(){let r,e,n,i,_,a,p;return r="Please enter a title",e=" The title is too short",n=" The title is too long",i=" submit ",_=" cancel ",a=" " + "\ufffd0\ufffd" + " ",p=" Task list is empty ",[[1,"title-column"],["name","columnForm",3,"formGroup",4,"ngIf"],["class","btn-form-column","color","warn","mat-raised-button","",3,"click",4,"ngIf"],["class","column-title",3,"click",4,"ngIf"],["mat-mini-fab","",3,"click",4,"ngIf"],[1,"column"],["mat-mini-fab","",3,"click"],[1,"tasks"],[4,"ngIf","ngIfElse"],["tasks",""],["name","columnForm",3,"formGroup"],["formControlName","title","matInput","",1,"column-form-input"],["class","input-error",4,"ngIf"],[1,"input-error"],[4,"ngIf"],r,e,n,["color","warn","mat-raised-button","",1,"btn-form-column",3,"click"],i,_,[1,"column-title",3,"click"],a,p,["cdkDropList","",1,"example-list",3,"cdkDropListData","cdkDropListDropped"],["cdkDrag","","class","example-box",3,"task","deleteTask","showTaskInfo",4,"ngFor","ngForOf"],["cdkDrag","",1,"example-box",3,"task","deleteTask","showTaskInfo"]]},template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,H,3,2,"form",1),t.YNc(2,j,2,0,"button",2),t.YNc(3,W,2,0,"button",2),t.YNc(4,V,2,1,"p",3),t.YNc(5,tt,3,0,"button",4),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"button",6),t.NdJ("click",function(){return n.onAddTask(n.column)}),t.TgZ(8,"mat-icon"),t._uU(9,"add"),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.YNc(11,et,2,0,"p",8),t.qZA(),t.YNc(12,nt,2,2,"ng-template",null,9,t.W1O),t.qZA()),2&e){const i=t.MAs(13);t.xp6(1),t.Q6J("ngIf",n.isEdit&&n.columnForm),t.xp6(1),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",!n.isEdit),t.xp6(1),t.Q6J("ngIf",!n.isEdit),t.xp6(6),t.Q6J("ngIf",!n.column.tasks.length)("ngIfElse",i)}},directives:[c.O5,C.lW,A.Hw,s._Y,s.JL,s.sg,s.Fj,x.Nt,s.JJ,s.u,T.TO,O.Wj,c.sg,Q,O.Zt],styles:["[_nghost-%COMP%]{margin-right:20px;border-radius:20px;height:85%;box-shadow:#00000040 0 14px 28px,#00000038 0 10px 10px;overflow:hidden}.title-column[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px 20px}.title-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]{color:#14213d;font-size:22px;margin:0;font-weight:bold;cursor:pointer;width:100%}.column[_ngcontent-%COMP%]{border:solid 1px rgba(192,192,192,.27);border-radius:6px!important;padding:10px;min-width:350px;max-width:350px;background-color:#dbcfc1;height:100%;overflow-y:scroll;max-height:85%}.column[_ngcontent-%COMP%]   .tasks[_ngcontent-%COMP%]{text-align:center}.column[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:10px}.btn-form-column[_ngcontent-%COMP%]{text-transform:capitalize;padding:0;border-radius:4px;font-style:normal;font-weight:400;font-size:12px}.example-list[_ngcontent-%COMP%]{min-height:60px;border-radius:4px;overflow:hidden;display:block}.example-box[_ngcontent-%COMP%]{border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-form-input[_ngcontent-%COMP%]{display:block;width:100%;height:24px;background-color:#efefef;border:solid 1px #e07a5f;border-radius:5px}"]}),o})();var it=l(4885);function st(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"app-column",10),t.NdJ("deleteColumn",function(i){return t.CHM(e),t.oxw(3).onDeleteColumn(i)})("editColumn",function(i){return t.CHM(e),t.oxw(3).onEditColumn(i)})("addTask",function(i){return t.CHM(e),t.oxw(3).onAddTask(i)})("deleteTask",function(i){return t.CHM(e),t.oxw(3).onDeleteTask(i)})("showTask",function(i){return t.CHM(e),t.oxw(3).onShowTaskDialog(i)})("movedTask",function(i){return t.CHM(e),t.oxw(3).movedTask(i)}),t.ALo(1,"async"),t.qZA()}if(2&o){const e=r.$implicit,n=r.index,i=t.oxw(3);t.Q6J("column",e)("index",n)("columns",t.lcZ(1,3,i.boards$).columns)}}function lt(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",8),t.YNc(2,st,2,5,"app-column",9),t.ALo(3,"async"),t.qZA(),t.BQk()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,e.boards$).columns)}}function _t(o,r){1&o&&(t.TgZ(0,"div",11),t.SDv(1,12),t.qZA())}const at=function(){return["../"]},ct=function(o,r){return{columnTrue:o,columnFalse:r}},mt=function(o,r){return{emptyBtn:o,fullBtn:r}};function dt(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",2),t.TgZ(2,"a",3),t.TgZ(3,"mat-icon"),t._uU(4,"arrow_back"),t.qZA(),t.qZA(),t.TgZ(5,"h2"),t._uU(6),t.ALo(7,"async"),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.ALo(9,"async"),t.ALo(10,"async"),t.YNc(11,lt,4,3,"ng-container",0),t.ALo(12,"async"),t.YNc(13,_t,2,0,"ng-template",null,5,t.W1O),t.TgZ(15,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw().addColumn()}),t.SDv(16,7),t.ALo(17,"async"),t.ALo(18,"async"),t.qZA(),t.qZA(),t.BQk()}if(2&o){const e=t.MAs(14),n=t.oxw();t.xp6(2),t.Q6J("routerLink",t.DdM(18,at)),t.xp6(4),t.Oqu(t.lcZ(7,6,n.boards$).title),t.xp6(2),t.Q6J("ngClass",t.WLB(19,ct,t.lcZ(9,8,n.boards$).columns.length>0,t.lcZ(10,10,n.boards$).columns.length<1)),t.xp6(3),t.Q6J("ngIf",t.lcZ(12,12,n.boards$).columns.length)("ngIfElse",e),t.xp6(4),t.Q6J("ngClass",t.WLB(22,mt,t.lcZ(17,14,n.boards$).columns.length<1,t.lcZ(18,16,n.boards$).columns.length>0))}}function pt(o,r){1&o&&t._UZ(0,"mat-spinner")}const ut=[{path:"",component:(()=>{class o{constructor(e,n,i,_){this.route=e,this.boardService=n,this.dialog=i,this.asyncPipe=_}ngOnInit(){this.route.queryParams.subscribe(e=>{this.boardService.initBoards(e.id),this.boards$=this.boardService.getBoards()})}onAddTask(e){const n=JSON.parse(localStorage.getItem("login")).id,i=Object.assign(Object.assign({},e.task),{userId:n});this.boardService.addTask(e.columnId,i)}addColumn(){this.openDialog(S.a,{data:{inputTitle:!0}}).pipe((0,g.q)(1)).subscribe(n=>{n&&this.boardService.addColumn(n)})}onDeleteColumn(e){this.openDialog(S.a,{data:{nameItem:e.title}}).pipe((0,g.q)(1)).subscribe(i=>{i&&this.boardService.deleteColumn(e.id)})}onEditColumn(e){this.boardService.editColumn(e)}onDeleteTask(e){this.openDialog(S.a,{data:{nameItem:e.task.title}}).pipe((0,g.q)(1)).subscribe(i=>{i&&this.boardService.deleteTask(e.task.id,e.columnId)})}openDialog(e,n){return this.dialog.open(e,n).afterClosed()}onShowTaskDialog({task:e,columnId:n}){const i=new d.vA;i.disableClose=!0,i.autoFocus=!0,i.maxWidth="500px",i.width="100%",i.data=e;const _=this.dialog.open(U,i),a=e.order,p=e.done;_.afterClosed().subscribe(m=>{if(m){const u=Object.assign(Object.assign({},m),{order:a,done:p,columnId:n});this.boardService.editTask(u,e.id)}})}movedTask(e){e.tasks.forEach(n=>{const i={title:n.title,done:n.done,order:n.order,description:n.description,userId:JSON.parse(localStorage.getItem("login")).id,boardId:this.asyncPipe.transform(this.boards$).id,columnId:e.column.id};this.boardService.updateTask(i,n.id).pipe((0,g.q)(1)).subscribe()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.gz),t.Y36(E.$),t.Y36(d.uw),t.Y36(c.Ov))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-board-shell"]],features:[t._Bn([E.$,c.Ov])],decls:4,vars:4,consts:function(){let r,e;return r=" + Add column ",e="Non column",[[4,"ngIf","ngIfElse"],["spinner",""],[1,"board-title-container"],[1,"back-btn",3,"routerLink"],[3,"ngClass"],["emptyColumn",""],["mat-raised-button","","color","warn","aria-label","Created column","type","button",3,"ngClass","click"],r,[1,"column-wrap"],[3,"column","index","columns","deleteColumn","editColumn","addTask","deleteTask","showTask","movedTask",4,"ngFor","ngForOf"],[3,"column","index","columns","deleteColumn","editColumn","addTask","deleteTask","showTask","movedTask"],[1,"empty"],e]},template:function(e,n){if(1&e&&(t.YNc(0,dt,19,25,"ng-container",0),t.ALo(1,"async"),t.YNc(2,pt,1,0,"ng-template",null,1,t.W1O)),2&e){const i=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,n.boards$))("ngIfElse",i)}},directives:[c.O5,f.yS,A.Hw,c.mk,C.lW,c.sg,rt,it.$g],pipes:[c.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;padding:50px 50px 20px;height:90%;overflow-x:scroll;box-sizing:border-box}[_nghost-%COMP%]   .board-title-container[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .back-btn[_ngcontent-%COMP%]{transform:scale(1.6);width:50px;color:#e07a5f}[_nghost-%COMP%]   .columnTrue[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%}[_nghost-%COMP%]   .columnFalse[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin-top:60px;margin-bottom:20px;min-width:200px;font-size:20px;height:inherit;margin-right:20px}[_nghost-%COMP%]   button.emptyBtn[_ngcontent-%COMP%]{margin:20px auto 0;height:40px;width:20px}[_nghost-%COMP%]   button.fullBtn[_ngcontent-%COMP%]{width:200px;height:150px}[_nghost-%COMP%]   .column-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%}[_nghost-%COMP%]   .empty[_ngcontent-%COMP%]{margin:150px auto 0;width:100px}"]}),o})()}];let Tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.Bz.forChild(ut)],f.Bz]}),o})();var gt=l(5378),Ct=l(4466);let ft=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[E.$],imports:[[c.ez,Tt,gt.q,Ct.m,s.UX,s.u5]]}),o})()}}]);