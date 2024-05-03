import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toolbar,Editor, NgxEditorModule } from 'ngx-editor';
@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [NgxEditorModule,FormsModule],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent {
  @Output() onContentChanged = new EventEmitter<string>();
  toolbar: Toolbar = [
    // default value
    ["bold", "italic"],
    ["underline", "strike"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"],
  ];
  editor: Editor;
  html = '';
  constructor()
  {
    this.editor = new Editor();
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
