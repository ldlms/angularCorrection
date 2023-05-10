

export class ProfilesService{
    profiles= [
        {
          name:'Steven Seagal',
          status:'online'
        },
        {
          name:'Bob Lafleur',
          status:'absent'
        },
        {
          name:'Gigi Dorio',
          status:'offline'
        },
      ]
    
    addProfile(name:string,status:string){
      console.log(`(Via ProfilesService)Profil ajouté : ${name}-${status}`);
      this.profiles.push({name:name,status:status})
    }

    updateStatus(id:number,status:string){
      console.log(`(Via ProfilesService)Status MAJ : ${id}-${status}`);
      this.profiles[id].status = status;
    }
}