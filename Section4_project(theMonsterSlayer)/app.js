let generalAttack = (power, who, gameover)=>{
	
	console.log("attack")
	let attackHp = Math.floor(power*Math.random());
  who -= attackHp;
  if(who < 0){
  	alert('someone got killed');
    gameover = false;
    return [who, attackHp, gameover]; 
  }
  return [who, attackHp, gameover]; 
}

new Vue({
    el: '#app',
    data: {
        monsterHp: 100,
        myHp: 100,
        show: false,
        monsterAttackRecord:[],
        myAttackRecord: []
    },
    methods: {
    	attack(){
      	let myTemp = generalAttack(30, this.monsterHp, this.show);
        let monsterTemp = generalAttack(20, this.myHp, this.show);
      	this.monsterHp = myTemp[0];  
        this.show = myTemp[2] && monsterTemp[2];
        console.log(this.monsterAttackRecord);
       	setTimeout(()=>{
        	this.myHp = monsterTemp[0];
        });
         this.monsterAttackRecord.push([myTemp[1],monsterTemp[1]]);
      },
      specialAttack(){
      	let myTemp = generalAttack(100, this.monsterHp, this.show);
        let monsterTemp = generalAttack(20, this.myHp, this.show);
      	this.monsterHp = myTemp[0];     
        this.show = myTemp[2] && monsterTemp[2];
        console.log(this.monsterAttackRecord);
       	setTimeout(()=>{
        	this.myHp = monsterTemp[0];
        });
         this.monsterAttackRecord.push([myTemp[1],monsterTemp[1]]);
      },
      heal(){
      	let myHeal=()=>{
        	let attackHp = Math.floor(50*Math.random());
        	this.myHp+=attackHp;
          let monsterTemp = generalAttack(20, this.myHp, this.show);
          this.show = monsterTemp[2];
        	setTimeout(()=>{
           	this.myHp = monsterTemp[0];
        	},500);
          this.monsterAttackRecord.push([0, monsterTemp[1]])
        };
        myHeal();
      },
      giveUp(){
      	this.show = false;
        this.monsterHp = 100;
        this.myHp = 100;
      },
      startNew(){
      	this.show = !this.show; 
        this.monsterHp = 100;
        this.myHp = 100;
      }
    }
});