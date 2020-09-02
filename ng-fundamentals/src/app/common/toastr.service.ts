import {Injectable} from '@angular/core'

declare let toastr: any;

@Injectable()
export class ToastrService{
    success(msg:string, title?:string){
        toastr.success(msg, title);
    }
    info(msg:string, title?:string){
        toastr.info(msg, title);
    }
    warning(msg:string, title?:string){
        toastr.warning(msg, title);
    }
    error(msg:string, title?:string){
        toastr.error(msg, title);
    }
}