/**
* Other Tiers Plugin
* because jd is a shit fucker
* by: panpawn
*/

exports.commands = {
	ot: 'othertiers',
	othertiers: function (target, room, user, connection) {
		if (room.id !== 'othertiers') return this.sendReply("Hey u bish, get in Other Tiers to use this command,,,");
		if (!this.canTalk()) return;
		if (!this.canBroadcast()) return;
		var ot = toId(target);
		if (ot === 'poll') {
			user.chat('/poll Next type of Tour?, Inverse battle, Little Cup, Ubers, Smogon Doubles, Balanced Hackmons, RU, NU, UU, PU, Hackmons, Catch&amp;Evolve, random doubles battle, Skybattles,Random Triples Battle,Random Monotype,Challenge Cup, Doubles Challenge Cup,Random LC,Metronome,Triples Challenge Cup, Seasonal,Anything Goes,Gen 1 Randbat,Hackmons Challenge Cup',room,connection);
		} else {
			var reply = "";
			if (ot === 'reg') reply = "Your typical, normal C&E. Nothing special, move along. One voice or higher will host. Rules can be found <a href=\"https://docs.google.com/document/d/1VMATySDZCOh5cj5FmgRjOX005pHWtCS3jfS468O-QUc/edit?pli=1\">here</a>.";
			if (ot === 'eevee') reply = "All starters given out are Eevee (thus allowing you to break the Species Clause for this kind of tour) and you may choose to evolve it into any Eeveelution. There is no host. Rules for C&E are <a href=\"https://docs.google.com/document/d/1VMATySDZCOh5cj5FmgRjOX005pHWtCS3jfS468O-QUc/edit?pli=1\">here</a>.";
			if (ot === 'doubles') reply = "This format is played in the Smogon Doubles tier. One voice or higher will host. Everyone will be give two starters, but you still only catch and evolve only one pokemon. Rules can be found <a href=\"https://docs.google.com/document/d/1VMATySDZCOh5cj5FmgRjOX005pHWtCS3jfS468O-QUc/edit?pli=1\">here</a>.";
			if (ot === 'monotype') reply = "All starters given are of a certain type picked by the host, who may decide the type themselves or just pick it randomly. One voice or higher will host. Rules are <a href=\"https://docs.google.com/document/d/1VMATySDZCOh5cj5FmgRjOX005pHWtCS3jfS468O-QUc/edit?pli=1\">here</a>.";
			if (ot === 'monogen') reply = "All starters come from the same generation/region of the host’s choice or pickrandom. One voice or higher will host. Rules are < a href=\"https://docs.google.com/document/d/1VMATySDZCOh5cj5FmgRjOX005pHWtCS3jfS468O-QUc/edit?pli=1\">here</a>.";
			if (ot === 'colors') reply = "All starters given will be of the certain color that is decided by the host or picked randomly. One voice or higher will host. One voice or higher will host. Rules are <a href=\"https://docs.google.com/document/d/1VMATySDZCOh5cj5FmgRjOX005pHWtCS3jfS468O-QUc/edit?pli=1\">here</a>.";
			if (ot === 'seasonal') reply = "These tours follow a monthly basis. One voice or higher will host. All the months themes can be found <a href=\"https://docs.google.com/document/d/1PtC2QsEsyyDJCBvRCdtH2uA1YC1CFBD10nAhsXXA4vk/edit?pli=1\">here</a>.";
			if (ot === 'metronome') reply = "You may use one pokemon. Rules are <a href=\"http://pastebin.com/XjKvmpWw\">here</a>.";
			if (!ot || ot === 'help') reply = "For information on how to use this command, go <a href=\"https://raw.githubusercontent.com/jd4565/Pokemon-Showdown/master/chat-plugins/1v1.js\">here</a>.";
			
			this.sendReplyBox("<b>" + ot + "</b> - " + reply);
		}
	}
};
