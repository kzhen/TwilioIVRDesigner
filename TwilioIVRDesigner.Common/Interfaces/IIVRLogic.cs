using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Twilio.Mvc;

namespace TwilioIVRDesigner.Common.Interfaces
{
  public interface IIVRLogic
  {
    void EntryPoint(VoiceRequest request);
    void NextInstruction(VoiceRequest request);
  }
}
