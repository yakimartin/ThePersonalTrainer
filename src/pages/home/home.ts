import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  matrix = new Array(16).fill(undefined).map(() => new Array(7).fill(undefined));

  trainees = [
    {name:"אלי אוחנה",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"יוסי בניון",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"ליונל מסי",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"כריסטיאנו רונאלדו",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"אורי מלמיליאן",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"ניר דוידוביץ",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"דודו אוואט",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"חיים רביבו",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"אייל ברקוביץ",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"שמעון גרשון",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"ניימר",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"אדיסון קבאני",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
    {name:"קיליאן אמבפה",day:new Array(16).fill(undefined).map(() => new Array(7).fill(undefined)),"userBalance":0,counterweek:0,requestweek:0,Grade:0},
  ];
  HumanGrade:any
  nambersOftTainees:any
  StandardDeviation:any
constructor(public navCtrl: NavController) 
{
  this.HumanGrade=8
  this.nambersOftTainees=this.trainees.length*10
  this.StandardDeviation=0
  var row;
  var col;
  var username; 
  var requestweek=new Array(this.trainees.length).fill(0);
  var getweek=new Array(this.trainees.length).fill(0);
  var requestmount=new Array(this.trainees.length).fill(0);
  var getmount=new Array(this.trainees.length).fill(0);
  var curentUser=0; 
  var rand;
  for(var mount=0; mount<4;mount++)
  {
    var yaki=new Array;

    for(var t=0;t<this.trainees.length;t++)
    {
      this.trainees[t].day= new Array(16).fill(undefined).map(() => new Array(7).fill(undefined))
       }
  for(var p=0;p<13*3;p++)
  {
    username = Name_Of_Trainees(this.trainees);
    for(var t=0;t<this.trainees.length;t++)
    {

      if(username == this.trainees[t].name)
      {
        row= Math.floor(Math.random() * 7); 
        col= Math.floor(Math.random() * 15)+1;
        this.trainees[t].day[col][row]="Asks";
      
      }
    }
  }

 
      for(var j=0;j<this.trainees.length;j++)
      {
        username = this.trainees[j].name
          for( row=0; row<7;row++)
          {
            for( col=0; col<16;col++)
            {
              if(this.trainees[j].day[col][row]=="Asks")
              {
                this.trainees[j].requestweek++;
                if(this.matrix[col][row] == undefined)
                {
                  this.matrix[col][row]=username
                  this.trainees[j].day[col][row]=="Received"
                  this.trainees[j].counterweek++;
                }
                //********************* */
                else
                {
                    yaki.push(this.trainees.map(function(e) { return e.name; }).indexOf(this.matrix[col][row]))
                    for(var chackhour=0;chackhour<16;chackhour++)
                    {

                        if(chackhour!=col && this.trainees[j].day[chackhour][row]=="Asks" )
                        {
                          if(this.matrix[chackhour][row]==undefined)
                          {
                            this.matrix[chackhour][row]=username
                            this.trainees[j].day[chackhour][row]=="Received"
                            this.trainees[j].counterweek++;
                            break;
                          }
                          if(this.matrix[chackhour][row]!=undefined )
                          {
                            curentUser=this.trainees.map(function(e) { return e.name; }).indexOf(this.matrix[chackhour][row]);
                            yaki.push(curentUser);
                          }
                        }
                        
                        else if(chackhour==15)
                        {
                          var max=-1000000000;
                          var min= 1000000000
                          curentUser= this.trainees.map(function(e) { return e.name; }).indexOf(this.matrix[col][row])
                          for(var v=0;v<yaki.length;v++)
                          {
                            if(this.trainees[j].userBalance+this.trainees[j].counterweek<=this.trainees[yaki[v]].userBalance+this.trainees[yaki[v]].counterweek)
                            {
                              if(max<this.trainees[yaki[v]].userBalance+this.trainees[yaki[v]].counterweek)
                              {
                                  max=this.trainees[yaki[v]].userBalance+this.trainees[yaki[v]].counterweek;
                                  curentUser= yaki[v];
                                 // console.log(this.trainees[j].name+"Balance=    "+this.trainees[j].userBalance);
                              }
                              else if(max=-1000000000)
                              {
                                if(min>this.trainees[yaki[v]].userBalance+this.trainees[yaki[v]].counterweek)
                                {
                                    min=this.trainees[yaki[v]].userBalance+this.trainees[yaki[v]].counterweek;
                                    curentUser= yaki[v];
                                   // console.log(this.trainees[j].name+"Balance=    "+this.trainees[j].userBalance);
                                }
                              }
                            }
                          }
                          if(this.trainees[j].userBalance+this.trainees[j].counterweek>this.trainees[curentUser].userBalance+this.trainees[curentUser].counterweek)
                          {
                            this.trainees[curentUser].userBalance++;
                            this.trainees[j].userBalance--;
                          }
                          else if(this.trainees[j].userBalance+this.trainees[j].counterweek<this.trainees[curentUser].userBalance+this.trainees[curentUser].counterweek)
                          {
                            this.matrix[col][row]=username;//
                            this.trainees[curentUser].userBalance--;
                            this.trainees[curentUser].counterweek--;
                            this.trainees[j].userBalance++;
                            this.trainees[j].counterweek++;
                          }
                          else if(this.trainees[j].userBalance+this.trainees[j].counterweek==this.trainees[curentUser].userBalance+this.trainees[curentUser].counterweek)
                          {
                            rand= Math.floor(Math.random() * 2);
                            if (rand==0)
                            {
                              this.trainees[curentUser].userBalance++;
                              this.trainees[j].userBalance--;
                            }
                            if (rand==1)
                            {
                              this.matrix[col][row]=username;
                              this.trainees[curentUser].userBalance--;
                              this.trainees[curentUser].counterweek--;
                              this.trainees[j].userBalance++;
                              this.trainees[j].counterweek++;
                            }
                          }
                        }
                    }//end for chackhour
                } //end else
                //************************ */
              }// if(this.trainees[j].day[col][row]=="Asks")
            }//for col
          }//for row
      }   //  end for(var j=0;j<this.trainees.length;j++)
 
      

    if(mount<3)
    {
      for(var r=0;r<7;r++)
      {
        for(var c=1;c<16;c++)
          this.matrix[c][r]=undefined

      }
   
    }
 this.HumanGrade=0
var average=0
var sum=0
var sum1=0

var sum2=0
this.StandardDeviation=0;

    for(var index=0;index<this.trainees.length;index++)
    {
      window.console.log(this.trainees[index].day)

      requestweek[index]=this.trainees[index].requestweek;
       requestmount[index]+=requestweek[index];

      getweek[index]=this.trainees[index].counterweek;
      getmount[index]+=getweek[index];
      this.trainees[index].Grade=10-(Math.pow(requestweek[index]-getweek[index], 2))
      this.HumanGrade+=this.trainees[index].Grade
      sum+= requestweek[index]-getweek[index];
      
      this.trainees[index].counterweek=0
      this.trainees[index].requestweek=0;
    }
    average=sum/this.trainees.length;
    for(var u=0;u<this.trainees.length;u++)
    {
      sum1+=Math.pow((requestweek[u]-getweek[u])-average,2)

    }
    sum2=(1/this.trainees.length)*sum1;
    this.StandardDeviation=Math.pow(sum2,0.5)
    console.log("HumanGrade=        "+ this.HumanGrade+"/"+this.nambersOftTainees);
    console.log("StandardDeviation=        "+ this.StandardDeviation);

    console.log("requestweek=        "+ requestweek);

    console.log("getweek=            "+ getweek);
    getweek.fill(0);
    requestweek.fill(0)
   // HumanGrade=0
    sum
  }
  
  console.log("requestmount=        "+ requestmount);
  console.log("getmount=            "+ getmount);

}    

  
d1=this.matrix[0][1]="שישי"
d2=this.matrix[0][2]="חמישי"
d3=this.matrix[0][3]="רביעי"
d4=this.matrix[0][4]="שלישי"
d5=this.matrix[0][5]="שני"
d6=this.matrix[0][6]="ראשון"
d7=this.matrix[0][7]="יום/שעה"
d0=this.matrix[0][0]="שבת"

h8=this.matrix[1][7]="08:00"
h9=this.matrix[2][7]="09:00"
h10=this.matrix[3][7]="10:00"
h11=this.matrix[4][7]="11:00"
h12=this.matrix[5][7]="12:00"
h13=this.matrix[6][7]="13:00"
h14=this.matrix[7][7]="14:00"
h15=this.matrix[8][7]="15:00"
h16=this.matrix[9][7]="16:00"
h17=this.matrix[10][7]="17:00"
h18=this.matrix[11][7]="18:00"
h19=this.matrix[12][7]="19:00"
h20=this.matrix[13][7]="20:00"
h21=this.matrix[14][7]="21:00"
h22=this.matrix[15][7]="22:00"


}

function Name_Of_Trainees(trainees) 
{
  var text = "";

  var Random_namber= -1;

  Random_namber= Math.floor(Math.random() * 13);  
  // returns a random integer from 0 to 12
  text = trainees[Random_namber].name

  return text;
}



