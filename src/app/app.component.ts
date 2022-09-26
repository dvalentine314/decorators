import { Component } from '@angular/core';
import { tinkerDecorator } from './readonlyDecorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decorators';

  poorMansDecorator(innerFunction:(a:any)=>{}){
    return (a:any)=>{
      console.log('starting');
      const result = innerFunction.apply(null,[a]);
      console.log('ending');
      return result;
    }
  }

  addNumbers(prop:string){
    console.log("test"+prop);
    return prop;
  }

  readonly wrapped = this.poorMansDecorator(this.addNumbers);


  ngOnInit(){
    this.testFunction2();
  }

  @tinkerDecorator
  testFunction2(){
    console.log("testFunction2");
  }

}
