class Ucenik{
    constructor(ime,prezime,email,password,brojTelefona,adresa,smjer,odjeljenje,imeroditelj1,telefonroditelj1,imeroditelj2,telefonroditelj2,jmbg,predmeti,ocjene,role,firstlogin){
        this.ime=ime,
        this.prezime=prezime,
        this.email=email,
        this.password=password,
        this.odjeljenje=odjeljenje,
        this.brojTelefona=brojTelefona,
        this.adresa=adresa,
        this.smjer=smjer,
        this.role=role,
        this.imeroditelj1=imeroditelj1,
        this.telefonroditelj1=telefonroditelj1,
        this.imeroditelj2=imeroditelj2,
        this.telefonroditelj2=telefonroditelj2,
        this.jmbg=jmbg,
        this.ocjene=ocjene,
        this.predmeti=predmeti
        this.firstlogin=firstlogin
        

        }

}
class Profesor{
    constructor(ime,prezime,email,password,predmet,brojTelefona,adresa,role,odjeljenjeKojimaPredaje,firstlogin,{razrednoOdjeljenje}={}){
        this.ime=ime,
        this.prezime=prezime,
        this.email=email,
        this.password=password,
        this.brojTelefona=brojTelefona,
        this.adresa=adresa,
        this.predmet=predmet,
        this.razrednoOdjeljenje=razrednoOdjeljenje,
        this.role=role
        this.odjeljenjeKojimaPredaje=odjeljenjeKojimaPredaje
        this.firstlogin=firstlogin
        }

}
class Admin{
    constructor(ime,prezime,email,password,brojTelefona,adresa,role,firstlogin){
        this.ime=ime,
        this.prezime=prezime,
        this.email=email,
        this.password=password,
        this.brojTelefona=brojTelefona,
        this.adresa=adresa,
        this.role=role
        this.firstlogin=firstlogin
        }
}
module.exports={
    Ucenik:Ucenik,
    Profesor:Profesor,
    Admin:Admin
}
