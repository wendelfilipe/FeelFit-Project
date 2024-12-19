using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fitness.Application.DTOs;
using Fitness.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Fitness.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FichaController : ControllerBase
    {
        private readonly IFichaService fichaService;

        public FichaController(IFichaService fichaService)
        {
            this.fichaService = fichaService;
        }

        [HttpGet("GetAllFichasAsync")]
        public async Task<IActionResult> GetAllFichasAsync()
        {
            try
            {
                var result = await fichaService.GetAllFichasAsync();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetFichaByIdAsync/{id}")]
        public async Task<IActionResult> GetFichaByIdAsync(int id)
        {
            try
            {
                var result = await fichaService.GetFichaByIdAsync(id);
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPost("CreateFichaAsync")]
        public async Task<IActionResult> CreateFichaAsync([FromBody] FichaDTO fichaDTO)
        {
            try
            {
                await fichaService.CreateAsync(fichaDTO);
                return StatusCode(200, "Ficha Created sucessfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPut("UpdateFichaAsync")]
        public async Task<IActionResult> UpdateFichaAsync([FromBody] FichaDTO fichaDTO)
        {
            try
            {
                await fichaService.UpdateAsync(fichaDTO);
                return StatusCode(200, "Ficha Update sucessfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpDelete("DeleteFichaAsync/{id}")]
        public async Task<IActionResult> DeleteFichaAsync(int id)
        {
            try
            {
                await fichaService.DeleteAsync(id);
                return StatusCode(200, "Ficha Delete sucessfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}