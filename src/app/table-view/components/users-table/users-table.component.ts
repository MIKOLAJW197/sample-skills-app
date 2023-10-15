import { EditUserModalComponent } from './../../edit-user-modal/edit-user-modal.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() set users(value: User[]) {
    this._users = value;
  }

  _users: User[] = [];

  get users() {
    return this._users;
  }

  displayedColumns: string[] = ['name', 'email', 'city'];

  constructor(private dialog: MatDialog) {}

  handleRowClick(selectedUser: User) {
    const ref = this.dialog.open(EditUserModalComponent, {
      data: {
        user: selectedUser,
      },
    });

    ref
      .afterClosed()
      .pipe(filter((result) => !!result))
      .subscribe((updatedUser) => {
        this._users = this.users.map((u) =>
          u.id === updatedUser.id ? updatedUser : u
        );
      });
  }
}
