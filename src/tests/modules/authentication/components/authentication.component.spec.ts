import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthenticationComponent } from '@sicatel/modules/authentication/components/authentication.component';
import { MockModule, MockProvider } from 'ng-mocks';

describe('AuthenticationComponent', () => {
  const routerSpy = { navigate: jest.fn() };
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent ],
      imports: [
        MockModule(MatIconModule),
        MockModule(MatInputModule),
        MockModule(MatFormFieldModule),
        MockModule(FormsModule),
        MockModule(ReactiveFormsModule),
        MockModule(MatButtonModule)
      ],
      providers: [
        MockProvider(Router, routerSpy)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard', () => {
    component.logIn({} as HTMLInputElement);
    expect(routerSpy.navigate).toHaveBeenCalled();
  });
});
