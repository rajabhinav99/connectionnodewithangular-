import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import { Item } from '../../model/item';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})

export class ItemlistComponent implements OnInit {
  item: Item[];
  addForm: FormGroup;
  constructor(private itemservice: ItemService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.itemservice.getItems().subscribe(data => {
      this.item = data;
    });

    this.addForm = this.formBuilder.group({
      _id: [],
      itemname: ['', Validators.required],
      itemqty: ['', Validators.required],
      itembought: [false, Validators.required]
    });
  }

  submitted: boolean = false;

  onSubmit() {

    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.itemservice.addItems(this.addForm.value).subscribe(data => {
      alert('Record added!');
    });

  }

}
