iframe learning


in fiddlerscript add following code for app1
static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }
		
		if (oSession.uriContains('localhost:4200')) {
			oSession.oResponse.headers.Add("test-header", "someval");
			oSession.oResponse.headers.Add("X-Frame-Options", "SAMEORIGIN");
			
		}
    }