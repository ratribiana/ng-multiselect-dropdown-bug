import { Component, OnInit } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ng-multiselect-dropdown";
  countries: Array<any> = [];
  selCountries = [
    {
      item_id: 1,
      item_text: "Philippines",
      image: "https://flagcdn.com/16x12/ph.png"
    },
    {
      item_id: 5,
      item_text: "United States",
      image: "https://flagcdn.com/16x12/us.png"
    }
  ];
  dropdownSettings: IDropdownSettings;

  ngOnInit() {
    this.countries = [
      {
        item_id: 1,
        item_text: "Philippines",
        image: "https://flagcdn.com/16x12/ph.png"
      },
      {
        item_id: 2,
        item_text: "Spain",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/br.jpg"
      },
      {
        item_id: 3,
        item_text: "United Kingdom",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/uk.jpg"
      },
      {
        item_id: 4,
        item_text: "Canada",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/ca.jpg",
        isDisabled: true
      },
      {
        item_id: 5,
        item_text: "United States",
        image: "https://flagcdn.com/16x12/us.png"
      },
      {
        item_id: 6,
        item_text: "Brazil",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"
      },
      {
        item_id: 7,
        item_text: "Barbados",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Barbados.jpg"
      },
      {
        item_id: 8,
        item_text: "Mexico",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/Mexico.jpg"
      }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  get getItems() {
    return this.countries.reduce((acc, curr) => {
      acc[curr.item_id] = curr;
      console.log(acc)
      return acc;
    }, {});
  }

  onItemSelect(item: any) {
    console.log("onItemSelect", item);
  }
  onSelectAll(items: any) {
    console.log("onSelectAll", items);
  }
}
