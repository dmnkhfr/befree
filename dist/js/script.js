function handleData(){new Vue({el:"#app",data:{festivalInfo:[],acts:[],currentCity:localStorage.getItem("befree_city")},computed:{cityInfo:function(){for(var t=this.festivalInfo,a=0;a<t.length;a++)if(t[a].fields.Place==this.currentCity)return t[a]}},mounted:function(){this.loadInfos(),this.loadActs()},methods:{loadInfos:function(){var a=this;this.festivalInfo=[],axios.get("https://api.airtable.com/v0/appJfav4dlJdonWhY/Festival%20Info?view=Grid%20view",{headers:{Authorization:"Bearer keyO54NEvmY5VwVOO"}}).then(function(t){a.festivalInfo=t.data.records}).catch(function(t){console.log(t)})},loadActs:function(){var a=this;this.acts=[],axios.get("https://api.airtable.com/v0/appJfav4dlJdonWhY/Acts?view=Grid%20view",{headers:{Authorization:"Bearer keyO54NEvmY5VwVOO"}}).then(function(t){a.acts=t.data.records}).catch(function(t){console.log(t)})}}})}function init(){handleData()}init();