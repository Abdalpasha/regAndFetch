import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms"
import { DisplayUserService } from "../display-user.service";
import { Router } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: "app-display-users",
  templateUrl: "./display-users.component.html",
  styleUrls: ["./display-users.component.css"]
})
export class DisplayUsersComponent implements OnInit {
  myControl = new FormControl();
  public users = [];
  private _searchStr: string;

  // Using angular material form:
  displayedColumns: string[] = ['sno', 'imageurl', 'name', 'email', 'nofreps', 'actions'];
  dataSource;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  // get the inupt data from the search input field and  use custom pipe to match it with the users and show them
  get searchStr(): string {
    return this._searchStr;
  }

  set searchStr(value: string) {
    this._searchStr = value;
  }

  constructor(
    private $userService: DisplayUserService,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.$userService.displayUsers().subscribe(
      response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      }
    );
  }
  // capture edit button click and navigate to the edit page
  editUser(userid: number) {
    this._router.navigate(["/edituser", userid]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
