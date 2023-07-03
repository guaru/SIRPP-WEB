import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { LoginService } from '@sicatel/core/http/login/login.service';
import { Menu } from '@sicatel/shared/models/menu/menu.interface';
import { IUserResponse } from '@sicatel/shared/models/response/user.response';
import { AuthenticationTestConstants } from '@sicatel/tests/configs/authentication-test.constants';
import { of } from 'rxjs';

describe('LoginService', () => {
    const spy = { post: jest.fn(), get: jest.fn() };

    let service: LoginService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: spy
                }
            ]
        });
        service = TestBed.inject(LoginService);
    }));

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should signin user',() =>{
        spy.post.mockReturnValue(of(AuthenticationTestConstants.userResponse));
        service.signIn(AuthenticationTestConstants.userRequest).subscribe( (response: IUserResponse) => {
            expect(spy.post.mock.calls.length).toBe(1);
            expect(response).toBe(AuthenticationTestConstants.userResponse);
        });
    });

    it('should load menu data', () => {
      spy.get.mockReturnValue(of(AuthenticationTestConstants.menu));
      service.loadMenu().subscribe( (response: Array<Menu>) => {
        expect(spy.get.mock.calls.length).toBe(1);
        expect(response).toBe(AuthenticationTestConstants.menu);
      });
    });

});
