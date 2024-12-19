using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Fitness.Application.DTOs;
using Fitness.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Fitness.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExerciciosController : ControllerBase
    {
        private readonly IExerciciosService exerciciosService;

        public ExerciciosController(IExerciciosService exerciciosService)
        {
            this.exerciciosService = exerciciosService;
        }

        [HttpGet("GetAllExercicios")]
        public async Task<IActionResult> GetExercicios()
        {
            try 
            {
                var result = await exerciciosService.GetAllExerciciosAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        [HttpGet("GetExerciciosById/{id}")]
        public async Task<IActionResult> GetExercicios(int id)
        {
            try 
            {
                var result = await exerciciosService.GetExercicioByIdAsync(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        [HttpPost("CreateExercicio")]
        public async Task<IActionResult> CreateExercicio([FromBody] ExerciciosDTO exerciciosDTO)
        {
            try 
            {
                await exerciciosService.CreateAsync(exerciciosDTO);
                return Ok("Create exercice sucessfully");
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        [HttpPut("UpdateExercicio")]
        public async Task<IActionResult> UpdateExercicio([FromBody] ExerciciosDTO exerciciosDTO)
        {
            try 
            {
                await exerciciosService.UpdateAsync(exerciciosDTO);
                return Ok("Create exercice sucessfully");
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        [HttpDelete("DeleteExercicio/{id}")]
        public async Task<IActionResult> DeleteExercicio(int id)
        {
            try 
            {
                await exerciciosService.DeleteAsync(id);
                return Ok("Delete exercice sucessfully");
            }
            catch( Exception ex)
            {
                return Ok(ex.Message);
            }
        }
    }
}