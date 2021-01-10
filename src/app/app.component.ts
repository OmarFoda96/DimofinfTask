import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DimofinfTask';
  editMode: boolean = false;
  tasks: any[] = [];
  form: FormGroup = new FormGroup({
    task: new FormControl(''),
  });
  selectedItem;
  selectedIndex;
  openEditMode(item, index) {
    this.selectedIndex = index;
    this.selectedItem = item;
    this.editMode=true
    this.form.controls.task.setValue(item.name)
  }
  deleteItem(item, index) {
    this.tasks.splice(index,1)
  }
  addTask(e) {
    if (this.editMode) {
      this.tasks.splice(this.selectedIndex,1,{
        name: e.target.value,
        id: this.tasks.length + 1,
        selected:false
      })
      this.form.reset();
      this.editMode=false
    } else {
      this.tasks.push({
        name: e.target.value,
        id: this.tasks.length + 1,
        selected:false
      });
      this.form.reset();
      this.editMode=false
    }
  }
  selectedMode(item){
    item.selected=true
    this.tasks.sort((a,b)=>{return a.selected-b.selected})
  }
}
