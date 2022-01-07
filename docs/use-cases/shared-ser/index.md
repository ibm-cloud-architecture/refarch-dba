---
title: Shared Services use case
description: Shared Services use case
---

### an IBM Cloud Pak for Business Automation use case

***

# Introduction

**Use Case Overview:** Working in a remote environment adds complexity to most tasks. Imagine you lead a shared services team and receive requests from other departments such as Accounts Payable or HR. In person, it's simple to collect information and share status. However, in a remote environment, organizing work is more challenging. Relying on email and phone is just not enough. Work can be duplicated or executed inconsistently, resulting in lost data and delays. You need a lightweight workflow to manage incoming requests.

**Choose an option:**

  * **Digital Business Automation on Cloud trial:** your environment is predeployed, continue to the [Guided Tour](#use-case-guided-tour) section below.
  * **Install Yourself:** To run Shared Services on your own environment you just need to install <a href="https://www.ibm.com/docs/en/cloud-paks/cp-biz-automation/21.0.x?topic=software-automation-workstream-services" target="_blank">IBM Automation Workstream Services</a>, there are no additional artifacts to deploy.

 ![10](./images/Slide2.png)

***

## Use Case Guided Tour

### Are you ready to accelerate activities in your daily work?

<details>
<summary>1 - Scenario Introduction - Shared Services</summary>

<h4>Demo Video</h4>


<div align="center">
<img src="./images/sharedServicesThumbnail.png">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=SK6_Ldbswok" title="Demo Video - Shared Services Request" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
</div>

<h4>Demo Outline</h4>

<a href="#full-demo-narration">[Full Demo Narration]</a>

<ol>
<li>Use Case Overview</li>
<li>Focus Corp Demo Dashboard review</li>
<li>Workstream Supervisor persona</li>
    <ul>
    <li>Workplace Tour</li>
    <li>Confirm Workstreams access</li>
    <li>Create workstream</li>
    <li>Test workstream</li>
    <li>Publish workstream</li>
    </ul>
<li>Use case review and value of lightweight workflow applications</li>
</ol>

<h4>Discovery Map</h4>

<img src="./images/sharedServices_map.png">

<br/>

<a href="#introduction">[Go to top]</a> | <a href="#use-case-guided-tour">[Go to Guided Tour]</a>
</details>


# Full Demo Narration

#### Intro

Working in a remote environment adds complexity to most tasks.  Imagine you lead a shared services team and receive requests from other departments such as Accounts Payable or HR. In person, it's simple to collect information and share status.

However, in a remote environment, organizing work is more challenging.  Relying on email and phone is just not enough. Work can be duplicated or executed inconsistently, resulting in lost data and delays.  You need a lightweight workflow to manage incoming requests.

#### Demo Start Page

After reviewing the demo launch page including the outline and discovery map, we are ready to launch the Line of Business Supervisor's Workplace interface, the single place you manage all your work.

#### Manage workstream teams

You check out the start workflow list and see great starting activities and workflows such as approval, checklist and more.

You start by managing the teams.  It's a good idea to add yourself to at least Administrators and Supervisors and maybe Team managers.  You can also create a Shared Services team so you can assign work to them later.

#### Create a workstream

Now it's time to create a workstream for incoming shared services requests.  We'll set it so everyone can start and give a description.  The simple, no-code editor allows you to assemble a workflow in just a few clicks.  Start with a checklist activity to represent the skill profile requested.  To make this reusable, we add checklist items with placeholders and allow the user that launches the flow to update and add more.  Let's also add a couple data items for the country and date available.  Once the request is submitted, the shared services team member will complete this form and confirm their skills.  Your first activity is complete!

We add another step to get manager approval and setup a simple branch flow.  For the approval branch we add a form to notify of the result.  Then, head back to our approval and add the rejection branch.  So simple!  To complete the workstream, we save and we're ready to go.

#### Test a workstream

The new flow starts in trial mode for the author or a testing group to try it out safely before the end users.  Simple to test, we see the launch screen specific to this workstream where the user starting the flow, such as an Accounts Payable clerk, will configure available options including checklist items, and also any activity assignments allowed by the workstream, which we did not activate yet.

Once started, we go back to the main Workplace.  Let's take on the role of a shared services team member and see how easy it is to complete the first step. Claim and open the task, check the checklist items, fill in the data, optionally attach a document for review, type a comment and submit.  This is much easier and more organized than email.  Now taking on my team manager role for approval, all looks good and I accept.  Finally, the original requestor receives an approval notification to complete the request. Back at the task list we can switch to workflows and without any customization, the tool provides a complete audit trail of all work by default.

#### Publish a workstream

Once ready, I can request a publish to share my workstream with other teams.  The platform has a built-in approval workstream for workstreams!  So we head to the same task list, click to review the workstream definition.  As a publisher, I may send it back with comments or publish directly.  And in just a few minutes, I created, tested and published a new, lightweight workflow available to anyone in my organization: ready to launch!

#### Use Case Summary

As you saw, Workstream Services helps you manage remote work more effectively by allowing business users to create lightweight workflows that automate internal processes, no coding required. Get ready to improve your team's productivity by simplifying common tasks and decreasing the complexity and limitations of remote work.


<br/>

[Go to top](#introduction) | [Go to Guided Tour](#use-case-guided-tour)
