import { Component } from '@angular/core';
import { IMqttMessage, MqttConnectionState, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard1.0';

  constructor(private mqttService: MqttService) {
    this.mqttService.state.subscribe((s: MqttConnectionState) => {
      const status = s === MqttConnectionState.CONNECTED ? 'CONNECTED' : 'DISCONNECTED';
      console.log(status)
      // this.status.push(`Mqtt client connection status: ${status}`);
    });
  }

ngOnInit() {

// this.mqttService.connect({
//       hostname: 'broker.hivemq.com',
//       port: 8000,
//       path: '/mqtt',
//       clientId: '1234e3qer23rf'
//     });

//  this.mqttService.onConnect
//         .subscribe(
//           connack=> {
//             console.log('CONNECTED');
//             console.log(connack);
//           }
//         );
  console.log("YEEEEEEEEEES")

// this.mqttService.observe('gat/38/openReservationRequests')
//         .subscribe((message: IMqttMessage) => {
//           this.msg = message;
//           console.log(new TextDecoder('utf-8').decode(message.payload));
//         });

}
}
