import {IConn} from "../connection.js"

export class MySQLConn extends IConn {

    requiredFields = ["host", "username", "password", "database"]

    template = `  <div class="inner-dialog">
                    <div class="inputs">
                        <label class="input-label">host</label>
                        <input ${this.customAttr}=${this.requiredFields[0]} type="text" class="text-box" required>
                    </div>
                    <div class="inputs">
                        <label class="input-label">username</label>
                        <input ${this.customAttr}=${this.requiredFields[1]} type="text" class="text-box" required>
                    </div>
                    <div class="inputs">
                        <label class="input-label">password</label>
                        <input ${this.customAttr}=${this.requiredFields[2]} type="password" class="text-box" required>
                    </div>
                    <div class="inputs">
                        <label class="input-label">database</label>
                        <input ${this.customAttr}=${this.requiredFields[3]} type="text" class="text-box" required>
                    </div>
                </div>`;
    
}
