import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  resource,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditCopyPathHttpService } from '../edit-copy-path-http/edit-copy-path-http.service';
import { GetOneCopyPathHttpService } from '../get-one-copy-path-http/get-one-copy-path-http.service';
import { CopyPathDto } from '../../models';
import { CommonModule } from '@angular/common';
import { EditCopyPathFormComponent } from '../components/edit-copy-path-form/edit-copy-path-form.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from 'src/environments/environment';
@Component({
  standalone: true,
  imports: [CommonModule, EditCopyPathFormComponent],
  selector: 'app-edit-copy-path-container',
  templateUrl: './edit-copy-path-container.component.html',
  styleUrls: ['./edit-copy-path-container.component.scss'],
})
export class EditCopyPathContainerComponent {
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private paramMap = toSignal(this.route.paramMap);
  private id = computed(() => this.paramMap()?.get('id') ?? '');
  public default = {} as CopyPathDto;

  public copyPathResource = resource({
    request: () => ({ id: this.id() }),
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `request` value changes.
    loader: ({ request, abortSignal }) =>
      fetch(`${environment.host}/copy-path/get/${request.id}`, {
        signal: abortSignal,
      }).then((res) => res.json() as Promise<CopyPathDto>),
  });

  constructor(private editCopyPathHttpService: EditCopyPathHttpService) {}

  onSubmitForm(copyPath: CopyPathDto) {
    this.editCopyPathHttpService
      .execute(parseInt(this.id()), copyPath)
      .subscribe(() => {
        this.router.navigate(['..']);
      });
  }
}
