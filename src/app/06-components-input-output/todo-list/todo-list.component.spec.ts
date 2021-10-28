import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    component.todos = [
      { title: 'Salir a caminar', body: 'Es necesario ejercitarse', completed: false },
      { title: 'Comprar comida para Coki', body: 'Comprar el alimento del perro', completed: true },
      { title: 'Tomar más agua', body: 'Es necesario tomar 2 litros de agua por día', completed: false },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 cards for each todo', () => {

    const cards = fixture.nativeElement.querySelectorAll('.card');

    expect(cards).withContext('should exists').toBeTruthy();
    expect(cards.length).withContext('should be 3').toBe(3);
  });

  it('should shows first todo', (() => {

    const h3 = fixture.nativeElement.querySelector('h3');
    const p = fixture.nativeElement.querySelector('p');
    const span = fixture.nativeElement.querySelector('span');

    expect(h3?.textContent).toBe(component.todos[0].title);
    expect(p?.textContent).toBe(component.todos[0].body);
    expect(span?.textContent).toBe("tarea pendiente");
  }));

  it('should change from pending to completed', () => {

    const span = fixture.nativeElement.querySelector('span');
    span.click();
    fixture.detectChanges();

    expect(span.textContent).toBe('tarea completada');
  });

});
