using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Twilio.TwiML;
using TwilioIVRDesigner.Common.Interfaces;

namespace TwilioIVRDesigner.Business
{
  public class IVRLogic : IIVRLogic
  {
    public TwilioResponse EntryPoint(Twilio.Mvc.VoiceRequest request)
    {
      TwilioResponse response = new TwilioResponse();

      response.Say("Welcome to the IVR");

      return response;
    }

    public void NextInstruction(Twilio.Mvc.VoiceRequest request)
    {
      throw new NotImplementedException();
    }
  }
}
