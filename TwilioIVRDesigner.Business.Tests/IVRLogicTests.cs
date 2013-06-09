using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Twilio.Mvc;

namespace TwilioIVRDesigner.Business.Tests
{
  [TestClass]
  public class IVRLogicTests
  {
    [TestClass]
    public class EntryPointTests
    {
      [TestMethod]
      public void When_SayIsTheFirstInstruction_Should_ReturnSay()
      {
        IVRLogic logic = new IVRLogic();

        VoiceRequest request = new VoiceRequest();

        var response = logic.EntryPoint(request);

        Assert.IsTrue(response.ToString().Contains("<Say>"));
      }

      [TestMethod]
      public void When_NoInstructionsAreSetup_Should_ReturnDefaultMessage()
      {
        IVRLogic logic = new IVRLogic();

        VoiceRequest request = new VoiceRequest();

        var response = logic.EntryPoint(request);

        Assert.Fail();
      }
    }

    [TestClass]
    public class NextInstructionTests
    {
      [TestMethod]
      public void When_SayIsTheNextInstruction_Should_ReturnSay()
      {
        Assert.Fail();
      }
    }
  }
}
