import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {
  nom : string = "Jean";
  prenom : string = "Dupond";
  adresse : string = "1 Rue de la Paix";
  codepostal : string = "67000";
  ville : string = "Strasbourg";
  email : string = "adresse@mail.com";
  civilite : string = "M";
  password : string = "password";
  login : string = "j.dupond";
  pays : string = "France";

  recap : string = "";
  generateRecap() {
    this.recap = 
    "nom:" + this.nom +
    ", prenom:" + this.prenom +
    ", adresse:" + this.adresse +
    ", codepostal:" + this.codepostal +
    ", ville:" + this.ville +
    ", email:" + this.email +
    ", civilite:" + this.civilite +
    ", password:" + this.password +
    ", login:" + this.login +
    ", pays:" + this.pays;
  }
}
