import { CopyPathDto } from '../../../../../api/src/copy-path/copyPathDto';
import { Component } from '@angular/core';
import { AddCopyPathHttpService } from '../add-copy-path-http/add-copy-path-http.service';
import { Router } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-add-copy-path-container',
  templateUrl: './add-copy-path-container.component.html',
  styleUrls: ['./add-copy-path-container.component.scss'],
})
export class AddCopyPathContainerComponent {
  onSubmitForm(data: CopyPathDto) {
    this.httpService.execute(data).subscribe(() => {
      this.router.navigate(['..']);
    });
  }

  constructor(
    private httpService: AddCopyPathHttpService,
    private router: Router
  ) {}
}
