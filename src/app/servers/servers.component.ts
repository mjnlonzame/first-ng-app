import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = "The server was not created";
	serverName = '';
	servers = ["Default Server 1", "Default Server 2"];
	isServerCreated = false;
	constructor() { 
		setTimeout(() => {
			console.log("pogi ako");
			this.allowNewServer = true;
		},2000);
	}

	ngOnInit() {
	}

	onCreateServer(){
		this.serverCreationStatus = "The server was created. The name is " + this.serverName;
		this.servers.push(this.serverName);
		this.isServerCreated = true;
	}

}
