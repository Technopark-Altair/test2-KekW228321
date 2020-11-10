import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css' ]
})
export class AppComponent {
title = 'homework2';

firstOperands: number;
secondOperands: number;
operator1: string;
operator2: string;
result: boolean;
Error: string;

doCalc(){
if(this.firstOperands != null && this.secondOperands != null && this.operator2 != null){
if(this.operator1!='!'){
if(this.operator2=='&&'){
this.result = Boolean(this.firstOperands && this.secondOperands)
this.Error = 'Нет ошибок'
}else if(this.operator2=='||'){
this.result = Boolean(this.firstOperands || this.secondOperands)
this.Error = 'Нет ошибок'
}
}else if (this.operator1 =='!'){
if(this.operator2=='&&'){
this.result = !Boolean(this.firstOperands && this.secondOperands)
this.Error = 'Нет ошибок'
}else if(this.operator2=='||'){
this.result = !Boolean(this.firstOperands || this.secondOperands)
this.Error = 'Нет ошибок'
}
}
}else if(this.firstOperands==null){
this.Error='Нет первого операнда!'
}else if(this.secondOperands==null){
this.Error='Нет второго операнда!'
}else if(this.operator2==null){
this.Error='Нет оператора действия!'
}
}
}