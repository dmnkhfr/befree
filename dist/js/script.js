Vue.config.devtools=!0;var controller=new Vue({el:"#app",data:{airtable:{url:"https://api.airtable.com/v0/",key:"keyO54NEvmY5VwVOO",id:"appJfav4dlJdonWhY"},festivalInfo:[],locations:[],headliner:[],mediumActs:[],smallActs:[],currentCity:"Barcelona",date:null,now:Math.trunc((new Date).getTime()/1e3),loading:!0},computed:{countdownSeconds:function(){return(this.date-this.now)%60},countdownMinutes:function(){return Math.trunc((this.date-this.now)/60)%60},countdownHours:function(){return Math.trunc((this.date-this.now)/60/60)%24},countdownDays:function(){return Math.trunc((this.date-this.now)/60/60/24)},countdownExpired:function(){return this.date-this.now<0}},methods:{toggleMenu:function(){document.querySelector("body").classList.toggle("openMenu")}},mounted:function(){var e=this;axios.get(e.airtable.url+e.airtable.id+"/festivalInfo",{headers:{Authorization:"Bearer "+e.airtable.key},params:{filterByFormula:"IF(place = '"+e.currentCity+"', TRUE(), FALSE())"}}).then(function(t){e.festivalInfo=t.data.records,axios.get(e.airtable.url+e.airtable.id+"/festivalInfo",{headers:{Authorization:"Bearer "+e.airtable.key}}).then(function(t){e.locations=t.data.records,axios.get(e.airtable.url+e.airtable.id+"/acts",{headers:{Authorization:"Bearer "+e.airtable.key},params:{filterByFormula:"IF(category = 'Headliner', TRUE(), FALSE())"}}).then(function(t){e.headliner=t.data.records,axios.get(e.airtable.url+e.airtable.id+"/acts",{headers:{Authorization:"Bearer "+e.airtable.key},params:{filterByFormula:"IF(category = 'Medium Acts', TRUE(), FALSE())"}}).then(function(t){e.mediumActs=t.data.records,axios.get(e.airtable.url+e.airtable.id+"/acts",{headers:{Authorization:"Bearer "+e.airtable.key},params:{filterByFormula:"IF(category = 'Small Acts', TRUE(), FALSE())"}}).then(function(t){e.smallActs=t.data.records,e.date=Math.trunc(Date.parse(e.festivalInfo[0].fields.startTimestamp)/1e3),window.setInterval(function(){e.now=Math.trunc((new Date).getTime()/1e3)},1e3)}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}).catch(function(t){console.log(t)})}});