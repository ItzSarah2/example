import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-vocabulary',
  templateUrl: './add-vocabulary.component.html',
  styleUrls: ['./add-vocabulary.component.css']
})
export class AddVocabularyComponent {
  opened = false
  panelOpenState = false;
 // name: String = "";
 expansionPanels: {index:number}[] = []
  list:any[]=[];
  constructor(private http: HttpClient) {}

/*
addVocabulary() {
   // get the vocabulary from the user
   const vocabulary = prompt('Please enter the vocabulary:');

   // send the vocabulary to the server to be added to the website
   this.http.post('/api/vocabularies', { vocabulary }).subscribe(
     (response) => {
       console.log('Vocabulary added successfully!');
     },
     (error) => {
       console.error('Error adding vocabulary:', error);
     }
   );
}
*/
/*
addVocabulary() {

  let url = "http://localhost:4200/post"
  this.http.post(url, {
    name:this.name
  }).subscribe().add(() => {
    console.log(this.name)
  })
}
*/
/*
addVocabularie(add: {german: string, english: string}) {
console.log(add)

this.http.post("http://localhost:4200/", add)
.subscribe((data:any) => {
  console.log(data)
})

}
*/
addVocabulary(item: string) {
  console.log("item", item)
this.list.push(item);
console.log(this.list);
}

addExpansaionPanel() {
  this.expansionPanels.push({
    index: this.expansionPanels.length + 1,
  });
}
}
