import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CopyPathDto } from '../../../../../../api/src/copy-path/copyPathDto';

@Component({ standalone: false,
  selector: 'app-edit-copy-path-form',
  templateUrl: './edit-copy-path-form.component.html',
  styleUrls: ['./edit-copy-path-form.component.scss'],
})
export class EditCopyPathFormComponent implements OnInit {
  public span : number = 12;
  @Input() copyPath!: CopyPathDto;
    showAddActiveDaysOfWeekModal = false;

  onRemoveExcludedDirectories(index: number) {
    this.copyPath.excludeDirectories.splice(index, 1);
  }
  onHideAddExcludedDiretoryModal() {
    this.showAddExcludedDirectoryModal = false;
  }
  onOkAddExcludedDiretoryModal(name: string) {
    this.copyPath.excludeDirectories.push(name);
    this.showAddExcludedDirectoryModal = false;
  }
  showAddExcludedFileModal!: boolean;
  showAddExcludedDirectoryModal!: boolean;

  onHideAddExcludedFileModal() {
    this.showAddExcludedFileModal = false;
  }
  onOkAddExcludedFileModal(name: string) {
    this.copyPath.excludeFiles.push(name);
    this.showAddExcludedFileModal = false;
  }

  onRemoveIncludedFiles(index: number) {
    this.copyPath.includeFilesOnly.splice(index, 1);
  }
  onRemoveExcludedFiles(index: number) {
    this.copyPath.excludeFiles.splice(index, 1);
  }
  onOkAddIncludeFileModal(name: string) {
    this.copyPath.includeFilesOnly.push(name);
    this.showAddIncludeFileModal = false;
  }
  onHideAddIncludeFileModal() {
    this.showAddIncludeFileModal = false;
  }
  showAddIncludeFileModal = false;
  addExcludeFiles() {
    this.showAddExcludedFileModal = true;
  }
  addExcludeDirectories() {
    this.showAddExcludedDirectoryModal = true;
  }
  addIncludeFile() {
    this.showAddIncludeFileModal = true;
  }

  @Output() submitForm = new EventEmitter();

  onSubmitForm() {

    this.submitForm.emit({...this.copyPath, ...this.validateForm.getRawValue()});
  }
  addActiveDaysOfWeek() {
    this.showAddActiveDaysOfWeekModal = true;
  }
  onRemoveActiveDaysOfWeek(index: number) {
    this.copyPath.activeDaysOfWeek.splice(index, 1);
  }

  onOkAddActiveDaysOfWeekModal(day: string) {
    this.copyPath.activeDaysOfWeek.push(day);
    this.showAddExcludedDirectoryModal = false;
  }
  onHideAddActiveDaysOfWeekModal() {
    this.showAddActiveDaysOfWeekModal = false;
  }
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [this.copyPath.name, [Validators.required]],
      source: [this.copyPath.source, [Validators.required]],
      destination: [this.copyPath.destination, [Validators.required]],
      showProgressInLogs: this.copyPath.showProgressInLogs,
      disable: this.copyPath.disable
    });
  }
}
