using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Twilio.Mvc;
using Twilio.TwiML;

namespace TwilioIVRDesigner.Common.Interfaces
{
  public interface IIVRLogic
  {
    TwilioResponse EntryPoint(VoiceRequest request);
    void NextInstruction(VoiceRequest request);
  }
}
